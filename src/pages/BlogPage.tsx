import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote IT Work: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in remote IT work and what they mean for businesses and freelancers in the coming year.',
      author: 'Maryanne Chiriboga',
      date: '2024-01-15',
      category: 'Industry Trends',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Build a Successful IT Freelance Career',
      excerpt: 'Essential tips and strategies for IT professionals looking to transition into freelancing or grow their existing practice.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'Career Advice',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'A comprehensive guide to protecting your business from cyber threats without breaking the budget.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      category: 'Security',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Rise of AI in Software Development',
      excerpt: 'How artificial intelligence is transforming the way we write code and what it means for developers.',
      author: 'David Chen',
      date: '2024-01-08',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Cloud Migration Strategies for Growing Companies',
      excerpt: 'Step-by-step guide to successfully migrating your business operations to the cloud.',
      author: 'Jennifer Lopez',
      date: '2024-01-05',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Building Trust in Remote IT Teams',
      excerpt: 'Strategies for managers to build and maintain trust with distributed IT teams.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      category: 'Management',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Industry Trends', 'Career Advice', 'Security', 'Technology', 'Cloud Computing', 'Management'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NIQ Network Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Insights, tips, and industry news for IT professionals and businesses
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? 'primary' : 'outline'}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Featured Post */}
              <Card className="mb-12 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4">{blogPosts[0].category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User size={16} className="mr-2" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Button variant="primary" rightIcon={<ArrowRight size={16} />}>
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User size={14} className="mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm" rightIcon={<ArrowRight size={14} />}>
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get the latest insights and tips delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button variant="primary" fullWidth>
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Popular Posts
                    </h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex gap-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <div key={category} className="flex justify-between items-center">
                          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
                            {category}
                          </span>
                          <span className="text-sm text-gray-400">
                            {Math.floor(Math.random() * 10) + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};