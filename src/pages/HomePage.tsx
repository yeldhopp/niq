import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FeaturedProfiles } from '../components/home/FeaturedProfiles';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CtaSection } from '../components/home/CtaSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProfiles />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};