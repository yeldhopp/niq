import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProfilesPage } from './pages/ProfilesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { BlogPage } from './pages/BlogPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/how-it-works/clients" element={<HowItWorksPage />} />
          <Route path="/how-it-works/freelancers" element={<HowItWorksPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/profiles/categories" element={<ProfilesPage />} />
          <Route path="/profiles/top-rated" element={<ProfilesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/categories" element={<ProjectsPage />} />
          <Route path="/projects/featured" element={<ProjectsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/pricing/business" element={<PricingPage />} />
          <Route path="/pricing/freelancer" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Placeholder routes for other footer links */}
          <Route path="/post-project" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Post Project - Coming Soon</h1></div>} />
          <Route path="/create-profile" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Create Profile - Coming Soon</h1></div>} />
          <Route path="/success-stories/clients" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Client Success Stories - Coming Soon</h1></div>} />
          <Route path="/resources/freelancers" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Freelancer Resources - Coming Soon</h1></div>} />
          
          {/* 404 Page */}
          <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;