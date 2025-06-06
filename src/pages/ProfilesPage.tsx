import React from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ProfilesPage: React.FC = () => {
  const mockProfiles = [
    {
      id: 1,
      name: 'Jennifer Lopez',
      title: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 47,
      hourlyRate: 85,
      skills: ['React', 'Node.js', 'AWS'],
      avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Michael Johnson',
      title: 'DevOps Engineer',
      location: 'Seattle, WA',
      rating: 4.8,
      reviews: 32,
      hourlyRate: 95,
      skills: ['AWS', 'Docker', 'Kubernetes'],
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Sophia Williams',
      title: 'Cybersecurity Specialist',
      location: 'Austin, TX',
      rating: 5.0,
      reviews: 21,
      hourlyRate: 110,
      skills: ['Penetration Testing', 'Security Audits'],
      avatar: 'https://images.pexels.com/photos/5905580/pexels-photo-5905580.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find IT Experts</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Browse verified IT professionals ready to help with your projects
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search skills, technologies, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
            </div>
            <Button variant="primary" size="lg">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hourly Rate
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$25 - $50</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$50 - $75</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$75 - $100</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$100+</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">React</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Node.js</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">AWS</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Python</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {mockProfiles.length} IT Professionals Found
                </h2>
                <select className="border border-gray-300 rounded-md px-3 py-2">
                  <option>Sort by: Relevance</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                </select>
              </div>

              <div className="space-y-6">
                {mockProfiles.map((profile) => (
                  <Card key={profile.id} className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={profile.avatar}
                          alt={profile.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {profile.name}
                            </h3>
                            <p className="text-gray-600 mb-2">{profile.title}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <MapPin size={16} className="mr-1" />
                              {profile.location}
                            </div>
                            <div className="flex items-center mb-4">
                              <Star size={16} className="text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{profile.rating}</span>
                              <span className="text-gray-500 ml-1">({profile.reviews} reviews)</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 mb-2">
                              ${profile.hourlyRate}/hr
                            </div>
                            <Button variant="primary">
                              View Profile
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {profile.skills.map((skill, index) => (
                            <Badge key={index}>{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};