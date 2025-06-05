import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold text-blue-700">NIQ</span>
          <span className="text-3xl font-medium text-gray-800">Network</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition">
              Find Talent <ChevronDown size={20} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <Link to="/profiles" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">Browse Profiles</Link>
              <Link to="/profiles/categories" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">By Specialization</Link>
              <Link to="/profiles/top-rated" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">Top Rated</Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition">
              Find Projects <ChevronDown size={20} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <Link to="/projects" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">Browse Projects</Link>
              <Link to="/projects/categories" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">By Category</Link>
              <Link to="/projects/featured" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">Featured</Link>
            </div>
          </div>
          
          <Link to="/how-it-works" className="text-lg text-gray-700 hover:text-blue-600 transition">
            How It Works
          </Link>
          
          <Link to="/pricing" className="text-lg text-gray-700 hover:text-blue-600 transition">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-3 text-lg text-gray-700 hover:text-blue-600 transition">
                <img
                  src={user.avatar_url || 'https://via.placeholder.com/40'}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{user.name}</span>
                <ChevronDown size={20} />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/dashboard" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">Dashboard</Link>
                <Link to="/profile" className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50">My Profile</Link>
                <button 
                  onClick={logout}
                  className="block w-full text-left px-4 py-3 text-base text-red-600 hover:bg-red-50"
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
                size="lg"
                className="text-lg"
              >
                Log In
              </Button>
              <Button 
                as="a" 
                href="https://tech.niq.net/register"
                variant="primary"
                size="lg"
                leftIcon={<User size={20} />}
                className="text-lg"
              >
                Register
              </Button>
            </>
          )}
        </div>

        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link 
              to="/profiles" 
              className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Talent
            </Link>
            <Link 
              to="/projects" 
              className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Projects
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <div className="pt-4 space-y-4">
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block py-3 text-lg text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-3 text-lg text-red-600"
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
                    size="lg"
                    className="text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Button>
                  <Button 
                    as="a" 
                    href="https://tech.niq.net/register"
                    variant="primary"
                    fullWidth
                    size="lg"
                    leftIcon={<User size={20} />}
                    className="text-lg"
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