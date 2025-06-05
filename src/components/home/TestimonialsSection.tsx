import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "NIQ Network connected us with a cybersecurity expert who identified vulnerabilities we'd missed for years. Worth every penny and more.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "As a freelance developer, NIQ Network has been a game-changer. Local clients, fair rates, and a platform that understands IT professionals.",
      name: "David Chen",
      role: "Full Stack Developer",
      company: "Independent Contractor",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "We needed to augment our team quickly for a critical project. NIQ Network delivered top talent within days, not weeks.",
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "Global Solutions LLC",
      avatar: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-blue-200">
            Hear from businesses and freelancers who've found success on NIQ Network.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-700 bg-opacity-30 rounded-xl p-6 md:p-10 backdrop-blur-sm">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic mb-8 text-blue-100">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-teal-400">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-blue-200">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 right-10 flex space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Pagination indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-white scale-110' : 'bg-blue-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};