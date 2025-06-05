import { Project, Profile, User, Bid } from '../types';

const API_BASE_URL = 'https://tech.niq.net/wp-json/wp/v2';

// Helper function for API requests
async function fetchAPI<T>(endpoint: string, options = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include', // Important for auth cookies
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

// Projects API
export const projectsAPI = {
  getProjects: (page = 1, filters = {}): Promise<{ projects: Project[], total: number }> => {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      ...filters,
    });
    
    return fetchAPI(`/project?${queryParams.toString()}`);
  },
  
  getProject: (id: number): Promise<Project> => {
    return fetchAPI(`/project/${id}`);
  },
  
  getFeaturedProjects: (): Promise<Project[]> => {
    return fetchAPI('/project?featured=1&per_page=3');
  },
};

// Profiles API
export const profilesAPI = {
  getProfiles: (page = 1, filters = {}): Promise<{ profiles: Profile[], total: number }> => {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      ...filters,
    });
    
    return fetchAPI(`/freelancer-profiles?${queryParams.toString()}`);
  },
  
  getProfile: (id: number): Promise<Profile> => {
    return fetchAPI(`/freelancer-profiles/${id}`);
  },
  
  getFeaturedProfiles: (): Promise<Profile[]> => {
    return fetchAPI('/freelancer-profiles?featured=1&per_page=4');
  },
};

// User API
export const userAPI = {
  getCurrentUser: (): Promise<User | null> => {
    return fetchAPI('/users/me')
      .catch(() => null); // Return null if not authenticated
  },
  
  getUserDashboard: (): Promise<any> => {
    return fetchAPI('/dashboard');
  },
};

// Bids API
export const bidsAPI = {
  getBidsForProject: (projectId: number): Promise<Bid[]> => {
    return fetchAPI(`/bids?project_id=${projectId}`);
  },
  
  submitBid: (projectId: number, bidData: Partial<Bid>): Promise<Bid> => {
    return fetchAPI('/bids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_id: projectId, ...bidData }),
    });
  },
};