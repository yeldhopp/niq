import React from 'react';
import { ArrowRight, Search, Shield, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-500"></div>
        <div className="absolute left-0 bottom-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-teal-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IT Experts <span className="text-orange-400">Within Reach</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Connect with local, verified IT professionals for your projects. 
              Secure, hassle-free hiring with guaranteed results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                as="a" 
                href="/profiles"
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Find Talent
              </Button>
              <Button 
                as="a" 
                href="https://tech.niq.net/register"
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
              >
                Become an Expert
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <Shield size={18} className="text-teal-300 mr-2" />
                <span className="text-blue-100">Verified Talent</span>
              </div>
              <div className="flex items-center">
                <Search size={18} className="text-teal-300 mr-2" />
                <span className="text-blue-100">Local Experts</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="text-teal-300 mr-2" />
                <span className="text-blue-100">Risk-Free Hiring</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 opacity-20 rounded-full"></div>
              
              {/* Main image/illustration */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white border-opacity-20">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="IT professionals collaborating" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Technical Experts</h3>
                      <p className="text-sm text-blue-100">Available in your timezone</p>
                    </div>
                    <Button 
                      variant="accent" 
                      size="sm"
                      rightIcon={<ArrowRight size={14} />}
                      as="a"
                      href="/profiles"
                    >
                      Browse
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white bg-opacity-10 rounded p-2 text-center">
                      <div className="text-xl font-bold">237+</div>
                      <div className="text-xs text-blue-100">Developers</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded p-2 text-center">
                      <div className="text-xl font-bold">142+</div>
                      <div className="text-xs text-blue-100">IT Support</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded p-2 text-center">
                      <div className="text-xl font-bold">95+</div>
                      <div className="text-xs text-blue-100">Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};