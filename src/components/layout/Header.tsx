import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-700">NIQ</span>
          <span className="text-2xl font-medium text-gray-800">Network</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
              Find Talent <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <Link to="/profiles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Profiles</Link>
              <Link to="/profiles/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">By Specialization</Link>
              <Link to="/profiles/top-rated" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Top Rated</Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
              Find Projects <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <Link to="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Projects</Link>
              <Link to="/projects/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">By Category</Link>
              <Link to="/projects/featured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Featured</Link>
            </div>
          </div>
          
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">
            How It Works
          </Link>
          
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition">
            Pricing
          </Link>
        </nav>

        {/* Auth/User Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <img
                  src={user.avatar_url || 'https://via.placeholder.com/32'}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{user.name}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Dashboard</Link>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Profile</Link>
                <button 
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <Button 
                as="a" 
                href="https://tech.niq.net/wp-login.php"
                variant="outline"
              >
                Log In
              </Button>
              <Button 
                as="a" 
                href="https://tech.niq.net/register"
                variant="primary"
                leftIcon={<User size={16} />}
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/profiles" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Talent
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Projects
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <div className="pt-2 space-y-3">
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block py-2 text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-red-600"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Button 
                    as="a" 
                    href="https://tech.niq.net/wp-login.php"
                    variant="outline"
                    fullWidth
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Button>
                  <Button 
                    as="a" 
                    href="https://tech.niq.net/register"
                    variant="primary"
                    fullWidth
                    leftIcon={<User size={16} />}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};