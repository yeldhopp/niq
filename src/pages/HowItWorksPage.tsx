import React from 'react';
import { CheckCircle, Users, Shield, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How NIQ Network Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A simple, secure process that connects businesses with verified IT professionals
          </p>
        </div>
      </section>

      {/* For Businesses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Businesses</h2>
            <p className="text-xl text-gray-600">Find and hire IT experts in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Post Your Project</h3>
              <p className="text-gray-600">Describe your IT needs, budget, and timeline. Our platform helps you create detailed project requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Review Proposals</h3>
              <p className="text-gray-600">Receive bids from qualified IT professionals. Review profiles, portfolios, and past client feedback.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hire & Pay Safely</h3>
              <p className="text-gray-600">Choose your expert and pay securely through our escrow system. Only release payment when satisfied.</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
              Post Your First Project
            </Button>
          </div>
        </div>
      </section>

      {/* For Freelancers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For IT Professionals</h2>
            <p className="text-xl text-gray-600">Build your freelance career with local clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-gray-600">Showcase your skills, experience, and portfolio. Get verified to build trust with potential clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Projects</h3>
              <p className="text-gray-600">Browse local projects that match your skills. Submit proposals with competitive rates and timelines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Paid</h3>
              <p className="text-gray-600">Complete projects and get paid securely. Build long-term relationships with satisfied clients.</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
              Create Your Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose NIQ Network */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose NIQ Network?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All IT experts undergo thorough verification</p>
            </div>
            <div className="text-center">
              <Users size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-600">Connect with professionals in your area</p>
            </div>
            <div className="text-center">
              <Clock size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Matching</h3>
              <p className="text-gray-600">Get matched with experts quickly</p>
            </div>
            <div className="text-center">
              <CheckCircle size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">Pay only when you're satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};