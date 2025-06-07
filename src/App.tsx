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
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Go Home
              </a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;