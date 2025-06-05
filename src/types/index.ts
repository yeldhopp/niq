// User Types
export interface User {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  role: 'freelancer' | 'business' | 'admin';
  created_at: string;
}

// Project Types
export interface Project {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  deadline: string;
  skills: Skill[];
  author: {
    id: number;
    name: string;
    avatar_url: string;
  };
  status: 'open' | 'ongoing' | 'completed' | 'cancelled';
  location: string;
  created_at: string;
  bid_count: number;
  featured: boolean;
}

// Profile Types
export interface Profile {
  id: number;
  user_id: number;
  display_name: string;
  title: string;
  description: string;
  skills: Skill[];
  hourly_rate: number;
  avatar_url: string;
  location: string;
  rating: number;
  review_count: number;
  portfolio_items: PortfolioItem[];
  experience: Experience[];
  education: Education[];
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  start_date: string;
  end_date?: string;
  current: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string;
}

// Bid Types
export interface Bid {
  id: number;
  project_id: number;
  freelancer_id: number;
  amount: number;
  delivery_time: number; // in days
  cover_letter: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  freelancer: {
    id: number;
    name: string;
    avatar_url: string;
    rating: number;
  };
}

// Filter Types
export interface ProjectFilters {
  category?: number;
  skill?: number[];
  budget_min?: number;
  budget_max?: number;
  location?: string;
  keyword?: string;
}

export interface ProfileFilters {
  skill?: number[];
  hourly_rate_min?: number;
  hourly_rate_max?: number;
  location?: string;
  keyword?: string;
}