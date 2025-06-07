import { Project, Profile, User, Bid } from '../types';

const API_BASE_URL = 'https://tech.niq.net/wp-json/niq-network/v1';

// Helper function for API requests
async function fetchAPI<T>(endpoint: string, options = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include', // Important for auth cookies
    headers: {
      'Content-Type': 'application/json',
      ...((options as any).headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} ${errorText}`);
  }

  return response.json();
}

// Projects API
export const projectsAPI = {
  getProjects: (page = 1, filters = {}): Promise<{ projects: Project[], total: number }> => {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: '10',
      ...filters,
    });
    
    return fetchAPI(`/projects?${queryParams.toString()}`)
      .then(data => Array.isArray(data) ? { projects: data, total: data.length } : data);
  },
  
  getProject: (id: number): Promise<Project> => {
    return fetchAPI(`/projects/${id}`);
  },
  
  getFeaturedProjects: (): Promise<Project[]> => {
    return fetchAPI('/projects?featured=1&per_page=3')
      .then(data => Array.isArray(data) ? data : data.projects || []);
  },
};

// Profiles API
export const profilesAPI = {
  getProfiles: (page = 1, filters = {}): Promise<{ profiles: Profile[], total: number }> => {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: '10',
      ...filters,
    });
    
    return fetchAPI(`/profiles?${queryParams.toString()}`)
      .then(data => Array.isArray(data) ? { profiles: data, total: data.length } : data);
  },
  
  getProfile: (id: number): Promise<Profile> => {
    return fetchAPI(`/profiles/${id}`);
  },
  
  getFeaturedProfiles: (): Promise<Profile[]> => {
    return fetchAPI('/profiles?featured=1&per_page=4')
      .then(data => Array.isArray(data) ? data : data.profiles || []);
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
      body: JSON.stringify({ project_id: projectId, ...bidData }),
    });
  },
};