# WordPress Backend Configuration Guide for NIQ Network

This guide provides step-by-step instructions to configure your WordPress installation at `https://tech.niq.net` to work seamlessly with the NIQ Network frontend at `https://niq.net`.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [WordPress Basic Setup](#wordpress-basic-setup)
3. [FreelanceEngine Theme Configuration](#freelanceengine-theme-configuration)
4. [Child Theme Setup](#child-theme-setup)
5. [Custom REST API Implementation](#custom-rest-api-implementation)
6. [CORS Configuration](#cors-configuration)
7. [Authentication Setup](#authentication-setup)
8. [Required Plugins](#required-plugins)
9. [Permalink Configuration](#permalink-configuration)
10. [Testing the API](#testing-the-api)
11. [Troubleshooting](#troubleshooting)

## Prerequisites

- Fresh WordPress installation at `https://tech.niq.net`
- FreelanceEngine theme purchased and downloaded
- FTP/SFTP access to your server
- Admin access to WordPress dashboard
- SSL certificate installed (HTTPS)

## WordPress Basic Setup

### 1. Install WordPress
```bash
# If not already installed, download and extract WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
# Upload files to your tech.niq.net domain root
```

### 2. Configure wp-config.php
Add these constants to your `wp-config.php` file:

```php
// Add before "/* That's all, stop editing! */"

// Enable REST API
define('WP_REST_API', true);

// Enable CORS
define('WP_CORS_ENABLED', true);

// Frontend domain
define('FRONTEND_DOMAIN', 'https://niq.net');

// Debug settings (disable in production)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

// Memory limit
ini_set('memory_limit', '512M');
```

## FreelanceEngine Theme Configuration

### 1. Install FreelanceEngine Theme
1. Download FreelanceEngine theme from your purchase
2. Go to WordPress Admin → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Upload the FreelanceEngine zip file
5. Activate the theme

### 2. FreelanceEngine Initial Setup
1. Go to **FreelanceEngine → Settings**
2. Configure basic settings:
   - Site title: "NIQ Network"
   - Currency: USD
   - Payment methods: Configure as needed
   - Email settings: Set up SMTP

### 3. Configure Post Types
FreelanceEngine creates these custom post types:
- `project` - For job projects
- `fre_profile` - For freelancer profiles
- `bid` - For project bids

Verify these are created by going to **Posts** in admin - you should see these new post types.

## Child Theme Setup

### 1. Create Child Theme Directory
Create a new folder in `/wp-content/themes/` called `freelanceengine-child-niq`

### 2. Create style.css
Create `/wp-content/themes/freelanceengine-child-niq/style.css`:

```css
/*
Theme Name: FreelanceEngine Child - NIQ Network
Description: Child theme for NIQ Network customizations
Template: freelanceengine
Version: 1.0.0
*/

@import url("../freelanceengine/style.css");

/* Custom styles for NIQ Network */
```

### 3. Create functions.php
Create `/wp-content/themes/freelanceengine-child-niq/functions.php` with the complete API implementation:

```php
<?php
/**
 * NIQ Network Child Theme Functions
 * Custom REST API for NIQ Network Frontend
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue parent theme styles
function niq_enqueue_parent_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'niq_enqueue_parent_styles');

// CORS Headers for API requests
function niq_add_cors_headers() {
    header("Access-Control-Allow-Origin: https://niq.net");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-WP-Nonce");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Expose-Headers: X-WP-Total, X-WP-TotalPages");

    if ('OPTIONS' === $_SERVER['REQUEST_METHOD']) {
        status_header(200);
        exit();
    }
}
add_action('init', 'niq_add_cors_headers');

// Register Custom REST API Routes
function niq_register_api_routes() {
    $namespace = 'niq-network/v1';

    // Projects endpoints
    register_rest_route($namespace, '/projects', array(
        'methods' => 'GET',
        'callback' => 'niq_get_projects',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array('default' => 10, 'sanitize_callback' => 'absint'),
            'page' => array('default' => 1, 'sanitize_callback' => 'absint'),
            'featured' => array('default' => 0, 'sanitize_callback' => 'absint'),
            'status' => array('default' => 'publish', 'sanitize_callback' => 'sanitize_text_field'),
        ),
    ));

    register_rest_route($namespace, '/projects/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'niq_get_single_project',
        'permission_callback' => '__return_true',
        'args' => array(
            'id' => array('required' => true, 'sanitize_callback' => 'absint'),
        ),
    ));

    // Profiles endpoints
    register_rest_route($namespace, '/profiles', array(
        'methods' => 'GET',
        'callback' => 'niq_get_profiles',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array('default' => 10, 'sanitize_callback' => 'absint'),
            'page' => array('default' => 1, 'sanitize_callback' => 'absint'),
            'featured' => array('default' => 0, 'sanitize_callback' => 'absint'),
        ),
    ));

    register_rest_route($namespace, '/profiles/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'niq_get_single_profile',
        'permission_callback' => '__return_true',
        'args' => array(
            'id' => array('required' => true, 'sanitize_callback' => 'absint'),
        ),
    ));

    // User endpoints
    register_rest_route($namespace, '/users/me', array(
        'methods' => 'GET',
        'callback' => 'niq_get_current_user',
        'permission_callback' => 'is_user_logged_in',
    ));

    // Bids endpoints
    register_rest_route($namespace, '/bids', array(
        'methods' => 'POST',
        'callback' => 'niq_submit_bid',
        'permission_callback' => 'is_user_logged_in',
        'args' => array(
            'project_id' => array('required' => true, 'sanitize_callback' => 'absint'),
            'amount' => array('required' => true, 'sanitize_callback' => 'floatval'),
            'delivery_time' => array('required' => true, 'sanitize_callback' => 'absint'),
            'cover_letter' => array('required' => true, 'sanitize_callback' => 'wp_kses_post'),
        ),
    ));
}
add_action('rest_api_init', 'niq_register_api_routes');

// API Callback Functions
function niq_get_projects($request) {
    $per_page = $request->get_param('per_page');
    $page = $request->get_param('page');
    $featured = $request->get_param('featured');
    $status = $request->get_param('status');

    $args = array(
        'post_type' => 'project',
        'post_status' => $status,
        'posts_per_page' => $per_page,
        'paged' => $page,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    if ($featured) {
        $args['meta_query'] = array(
            array(
                'key' => 'featured',
                'value' => '1',
                'compare' => '='
            )
        );
    }

    $query = new WP_Query($args);
    $projects = array();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $projects[] = niq_format_project_data(get_post());
        }
        wp_reset_postdata();
    }

    $response = new WP_REST_Response($projects, 200);
    $response->header('X-WP-Total', $query->found_posts);
    $response->header('X-WP-TotalPages', $query->max_num_pages);

    return $response;
}

function niq_get_single_project($request) {
    $id = $request->get_param('id');
    $project = get_post($id);

    if (!$project || $project->post_type !== 'project') {
        return new WP_Error('project_not_found', 'Project not found', array('status' => 404));
    }

    return new WP_REST_Response(niq_format_project_data($project), 200);
}

function niq_get_profiles($request) {
    $per_page = $request->get_param('per_page');
    $page = $request->get_param('page');
    $featured = $request->get_param('featured');

    $args = array(
        'post_type' => 'fre_profile',
        'post_status' => 'publish',
        'posts_per_page' => $per_page,
        'paged' => $page,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    if ($featured) {
        $args['meta_query'] = array(
            array(
                'key' => 'featured',
                'value' => '1',
                'compare' => '='
            )
        );
    }

    $query = new WP_Query($args);
    $profiles = array();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $profiles[] = niq_format_profile_data(get_post());
        }
        wp_reset_postdata();
    }

    $response = new WP_REST_Response($profiles, 200);
    $response->header('X-WP-Total', $query->found_posts);
    $response->header('X-WP-TotalPages', $query->max_num_pages);

    return $response;
}

function niq_get_single_profile($request) {
    $id = $request->get_param('id');
    $profile = get_post($id);

    if (!$profile || $profile->post_type !== 'fre_profile') {
        return new WP_Error('profile_not_found', 'Profile not found', array('status' => 404));
    }

    return new WP_REST_Response(niq_format_profile_data($profile), 200);
}

function niq_get_current_user($request) {
    $user = wp_get_current_user();
    
    if (!$user->ID) {
        return new WP_Error('not_logged_in', 'User not logged in', array('status' => 401));
    }

    return new WP_REST_Response(array(
        'id' => $user->ID,
        'name' => $user->display_name,
        'email' => $user->user_email,
        'avatar_url' => get_avatar_url($user->ID),
        'role' => $user->roles[0] ?? 'subscriber',
        'created_at' => $user->user_registered,
    ), 200);
}

function niq_submit_bid($request) {
    $project_id = $request->get_param('project_id');
    $amount = $request->get_param('amount');
    $delivery_time = $request->get_param('delivery_time');
    $cover_letter = $request->get_param('cover_letter');

    $project = get_post($project_id);
    if (!$project || $project->post_type !== 'project') {
        return new WP_Error('invalid_project', 'Invalid project ID', array('status' => 400));
    }

    $bid_id = wp_insert_post(array(
        'post_type' => 'bid',
        'post_status' => 'publish',
        'post_title' => 'Bid for ' . $project->post_title,
        'post_content' => $cover_letter,
        'post_author' => get_current_user_id(),
        'post_parent' => $project_id,
    ));

    if (is_wp_error($bid_id)) {
        return new WP_Error('bid_creation_failed', 'Failed to create bid', array('status' => 500));
    }

    update_post_meta($bid_id, 'bid_amount', $amount);
    update_post_meta($bid_id, 'delivery_time', $delivery_time);

    return new WP_REST_Response(array(
        'id' => $bid_id,
        'message' => 'Bid submitted successfully',
    ), 201);
}

// Data formatting functions
function niq_format_project_data($post) {
    $budget_min = get_post_meta($post->ID, 'budget_min', true) ?: 0;
    $budget_max = get_post_meta($post->ID, 'budget_max', true) ?: 0;
    $deadline = get_post_meta($post->ID, 'deadline', true);
    $location = get_post_meta($post->ID, 'location', true);
    $skills = wp_get_post_terms($post->ID, 'skill', array('fields' => 'names'));
    $featured = get_post_meta($post->ID, 'featured', true) === '1';

    return array(
        'id' => $post->ID,
        'title' => $post->post_title,
        'content' => $post->post_content,
        'excerpt' => $post->post_excerpt ?: wp_trim_words($post->post_content, 30),
        'budget' => array(
            'min' => (int) $budget_min,
            'max' => (int) $budget_max,
            'currency' => 'USD',
        ),
        'deadline' => $deadline,
        'skills' => array_map(function($skill) {
            return array('id' => 0, 'name' => $skill);
        }, $skills),
        'author' => array(
            'id' => $post->post_author,
            'name' => get_the_author_meta('display_name', $post->post_author),
            'avatar_url' => get_avatar_url($post->post_author),
        ),
        'status' => $post->post_status,
        'location' => $location,
        'created_at' => $post->post_date,
        'bid_count' => niq_get_bid_count($post->ID),
        'featured' => $featured,
    );
}

function niq_format_profile_data($post) {
    $hourly_rate = get_post_meta($post->ID, 'hourly_rate', true) ?: 0;
    $location = get_post_meta($post->ID, 'location', true);
    $skills = wp_get_post_terms($post->ID, 'skill', array('fields' => 'names'));
    $featured = get_post_meta($post->ID, 'featured', true) === '1';
    $rating = get_post_meta($post->ID, 'rating', true) ?: 0;
    $review_count = get_post_meta($post->ID, 'review_count', true) ?: 0;

    return array(
        'id' => $post->ID,
        'user_id' => $post->post_author,
        'display_name' => get_the_author_meta('display_name', $post->post_author),
        'title' => $post->post_title,
        'description' => $post->post_content,
        'skills' => array_map(function($skill) {
            return array('id' => 0, 'name' => $skill);
        }, $skills),
        'hourly_rate' => (int) $hourly_rate,
        'avatar_url' => get_avatar_url($post->post_author),
        'location' => $location,
        'rating' => (float) $rating,
        'review_count' => (int) $review_count,
        'portfolio_items' => array(),
        'experience' => array(),
        'education' => array(),
        'featured' => $featured,
    );
}

function niq_get_bid_count($project_id) {
    $bids = get_posts(array(
        'post_type' => 'bid',
        'post_parent' => $project_id,
        'post_status' => 'publish',
        'numberposts' => -1,
        'fields' => 'ids',
    ));
    return count($bids);
}

// Login/Logout redirects
function niq_login_redirect($redirect_to, $request, $user) {
    if (isset($user->ID)) {
        return 'https://niq.net/dashboard';
    }
    return $redirect_to;
}
add_filter('login_redirect', 'niq_login_redirect', 10, 3);

function niq_logout_redirect() {
    wp_redirect('https://niq.net');
    exit();
}
add_action('wp_logout', 'niq_logout_redirect');

// Enable REST API for custom post types
function niq_enable_rest_api_for_cpts() {
    global $wp_post_types;
    
    $post_types = array('project', 'fre_profile', 'bid');
    
    foreach ($post_types as $post_type) {
        if (isset($wp_post_types[$post_type])) {
            $wp_post_types[$post_type]->show_in_rest = true;
            $wp_post_types[$post_type]->rest_base = $post_type;
        }
    }
}
add_action('init', 'niq_enable_rest_api_for_cpts', 25);
```

### 4. Activate Child Theme
1. Go to **Appearance → Themes**
2. Activate "FreelanceEngine Child - NIQ Network"

## Required Plugins

### 1. Install Essential Plugins

#### Application Passwords (for API authentication)
```bash
# WordPress 5.6+ has this built-in, but for older versions:
```
1. Go to **Plugins → Add New**
2. Search for "Application Passwords"
3. Install and activate

#### Custom Fields Suite (for meta fields)
1. Go to **Plugins → Add New**
2. Search for "Custom Fields Suite"
3. Install and activate

#### WP REST API Controller (optional, for advanced API features)
1. Go to **Plugins → Add New**
2. Search for "WP REST API Controller"
3. Install and activate

### 2. Configure Custom Fields
Create custom fields for projects and profiles:

1. Go to **CFS → Field Groups**
2. Create "Project Fields" group:
   - budget_min (Number)
   - budget_max (Number)
   - deadline (Date)
   - location (Text)
   - featured (True/False)

3. Create "Profile Fields" group:
   - hourly_rate (Number)
   - location (Text)
   - rating (Number)
   - review_count (Number)
   - featured (True/False)

## Permalink Configuration

### 1. Set Permalink Structure
1. Go to **Settings → Permalinks**
2. Select "Post name" structure: `/%postname%/`
3. Click "Save Changes"

### 2. Flush Rewrite Rules
Add this to your functions.php temporarily, visit any page, then remove:

```php
// Add temporarily, then remove after visiting a page
add_action('init', 'flush_rewrite_rules');
```

## Authentication Setup

### 1. Configure WordPress Authentication
The frontend will use cookie-based authentication. Users will be redirected to WordPress for login/registration.

### 2. Test Authentication Flow
1. Visit `https://tech.niq.net/wp-login.php`
2. Login should redirect to `https://niq.net/dashboard`
3. Logout should redirect to `https://niq.net`

## Testing the API

### 1. Test Basic Endpoints
Open these URLs in your browser:

```
https://tech.niq.net/wp-json/niq-network/v1/projects
https://tech.niq.net/wp-json/niq-network/v1/profiles
https://tech.niq.net/wp-json/wp/v2/project
https://tech.niq.net/wp-json/wp/v2/fre_profile
```

### 2. Test CORS
Use browser developer tools to test CORS from `https://niq.net`:

```javascript
fetch('https://tech.niq.net/wp-json/niq-network/v1/projects', {
    credentials: 'include'
})
.then(response => response.json())
.then(data => console.log(data));
```

### 3. Create Test Data
1. Go to **Projects → Add New** (or whatever FreelanceEngine calls it)
2. Create a few test projects
3. Go to **Profiles** and create test profiles
4. Set some as "featured" using the custom fields

## Troubleshooting

### Common Issues and Solutions

#### 1. "rest_no_route" Error
- Check permalink structure is set to "Post name"
- Flush rewrite rules
- Verify functions.php has no syntax errors

#### 2. CORS Errors
- Verify CORS headers are being sent
- Check browser network tab for preflight OPTIONS requests
- Ensure credentials: 'include' is set in frontend requests

#### 3. 404 on API Endpoints
- Verify child theme is active
- Check functions.php for errors
- Ensure WordPress is updated

#### 4. Authentication Issues
- Verify user is logged in to WordPress
- Check cookie domain settings
- Test login redirect flow

#### 5. Empty API Responses
- Create test content in WordPress
- Verify custom post types exist
- Check post status (should be 'publish')

### Debug Mode
Enable debug mode temporarily in wp-config.php:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```

Check `/wp-content/debug.log` for errors.

## Production Checklist

Before going live:

- [ ] SSL certificate installed and working
- [ ] All API endpoints tested and working
- [ ] CORS configured correctly
- [ ] Authentication flow tested
- [ ] Test data created
- [ ] Debug mode disabled
- [ ] Security plugins installed
- [ ] Backup system configured
- [ ] Performance optimization completed

## Security Considerations

1. **API Rate Limiting**: Consider implementing rate limiting for API endpoints
2. **Input Validation**: All API inputs are sanitized in the functions.php
3. **Authentication**: Only authenticated users can create/modify content
4. **CORS**: Restricted to your frontend domain only
5. **SSL**: Ensure all communication is over HTTPS

## Support and Maintenance

- Monitor WordPress and plugin updates
- Regular backups of database and files
- Monitor API performance and errors
- Keep FreelanceEngine theme updated
- Review security logs regularly

---

This configuration will provide a fully functional WordPress backend that seamlessly integrates with your NIQ Network frontend at https://niq.net.