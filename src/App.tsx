import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Additional routes will be added as needed */}
          <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;