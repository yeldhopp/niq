import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NIQ Network</h1>
            <p className="text-xl text-blue-100 mb-8">
              Built by veterans, for everyone. We're revolutionizing how businesses connect with IT professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To create a trusted marketplace where businesses can find verified IT professionals 
                and freelancers can build sustainable careers, all while maintaining the highest 
                standards of quality and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We're Different</h3>
                <p className="text-gray-600 mb-6">
                  Unlike other freelance platforms, NIQ Network focuses exclusively on IT professionals. 
                  We understand the unique challenges of technical projects and provide specialized 
                  tools and support to ensure success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Rigorous verification process for all professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Local focus for better communication and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Specialized tools designed for IT projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Maryanne Chiriboga" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maryanne Chiriboga</h3>
                <p className="text-lg text-blue-600 mb-4">USMC Veteran & Founder</p>
                <p className="text-gray-600 mb-6">
                  As a Marine Corps veteran with over 15 years in the IT industry, Maryanne 
                  understands the importance of reliability, precision, and trust. She founded 
                  NIQ Network to bridge the gap between businesses needing quality IT services 
                  and skilled professionals seeking meaningful work.
                </p>
                <div className="flex items-center">
                  <Heart className="text-red-500 mr-2" size={20} />
                  <span className="text-gray-600">Proudly veteran-owned and operated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600">
                These principles guide everything we do at NIQ Network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
                <p className="text-gray-600">
                  Every professional is verified and every transaction is secure
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  Building lasting relationships between businesses and professionals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Committed to delivering the highest quality results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service</h3>
                <p className="text-gray-600">
                  Dedicated to serving our community with integrity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a business looking for IT expertise or a professional seeking new opportunities, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Find IT Experts
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              Join as Professional
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};