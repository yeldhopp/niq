import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">NIQ</span>
              <span className="text-2xl font-medium text-gray-200">Network</span>
            </div>
            <p className="text-gray-400">
              The local freelance marketplace for IT professionals. 
              Built by veterans, for everyone.
            </p>
            <p className="text-gray-400">
              Owned and operated by Maryanne Chiriboga, USMC veteran.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="mailto:contact@niq.net" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* For Clients */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Businesses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works/clients" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/post-project" className="text-gray-400 hover:text-white transition">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link to="/profiles" className="text-gray-400 hover:text-white transition">
                  Find Experts
                </Link>
              </li>
              <li>
                <Link to="/pricing/business" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/success-stories/clients" className="text-gray-400 hover:text-white transition">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Freelancers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works/freelancers" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition">
                  Find Projects
                </Link>
              </li>
              <li>
                <Link to="/create-profile" className="text-gray-400 hover:text-white transition">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/pricing/freelancer" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources/freelancers" className="text-gray-400 hover:text-white transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NIQ Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};