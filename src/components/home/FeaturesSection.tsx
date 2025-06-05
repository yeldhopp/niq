import React from 'react';
import { Shield, Users, Clock, Award, MapPin, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Verified Talent',
      description: 'Every IT professional on our platform undergoes a thorough verification process to ensure quality and reliability.'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Local & Time-Zone Aligned',
      description: 'Work with professionals in your area or time zone for easier communication and collaboration.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Risk-Free for Businesses',
      description: 'Our escrow payment system ensures you only pay when you\'re satisfied with the completed work.'
    },
    {
      icon: <Users size={24} />,
      title: 'Built by IT Veterans',
      description: 'Created by industry experts who understand the unique challenges of IT staffing and project management.'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Transparent Pricing',
      description: 'Simple subscription plans with no hidden fees. Pay monthly or save with annual billing.'
    },
    {
      icon: <Award size={24} />,
      title: 'Specialized IT Focus',
      description: 'Unlike general freelance platforms, we focus exclusively on IT, ensuring relevant skills and expertise.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes NIQ Network Different?</h2>
          <p className="text-xl text-gray-600">
            We're not just another freelance marketplace. We're a specialized platform built specifically for IT professionals and the businesses that need them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};