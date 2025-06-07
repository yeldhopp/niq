import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { userAPI } from '../services/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  checkAuthStatus: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const currentUser = await userAPI.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      // User not logged in - this is normal, don't set error
      setUser(null);
      console.log('User not authenticated');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Redirect to WordPress logout which will redirect back to our site
    window.location.href = 'https://tech.niq.net/wp-login.php?action=logout&redirect_to=' + encodeURIComponent(window.location.origin);
  };

  // Check authentication status when component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value = {
    user,
    isLoading,
    error,
    checkAuthStatus,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};