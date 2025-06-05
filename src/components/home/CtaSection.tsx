import React from 'react';
import { ArrowRight, Briefcase, User } from 'lucide-react';
import { Button } from '../ui/Button';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Businesses */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <Briefcase size={28} className="text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">For Businesses</h3>
              <p className="text-blue-100 text-lg mb-6">
                Find verified IT professionals for your projects. Save time and reduce risk with our local talent network.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Post projects and receive qualified bids</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Browse profiles and invite experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Pay only when you're satisfied</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  as="a" 
                  href="/post-project"
                  variant="accent"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Post a Project
                </Button>
                <Button 
                  as="a" 
                  href="/profiles"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
                  Browse Profiles
                </Button>
              </div>
            </div>
          </div>
          
          {/* For Freelancers */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl p-8 text-white relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400 opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <User size={28} className="text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">For IT Professionals</h3>
              <p className="text-teal-100 text-lg mb-6">
                Find local clients and projects that match your skills. Build a sustainable freelance career on your terms.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">✓</span>
                  <span>Create a profile that showcases your expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">✓</span>
                  <span>Bid on relevant projects in your area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">✓</span>
                  <span>Get paid securely and on time</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  as="a" 
                  href="https://tech.niq.net/register"
                  variant="accent"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Create Your Profile
                </Button>
                <Button 
                  as="a" 
                  href="/projects"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-700"
                >
                  Find Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to transform your IT hiring or freelancing?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Join NIQ Network today and connect with the best local IT talent or find your next project.
          </p>
          <Button 
            as="a" 
            href="https://tech.niq.net/register"
            variant="primary"
            size="lg"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};