import React from 'react';
import { Search, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ProjectsPage: React.FC = () => {
  const mockProjects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      description: 'Looking for a full-stack developer to build a modern e-commerce platform with React and Node.js.',
      budget: { min: 5000, max: 8000 },
      deadline: '2 weeks',
      skills: ['React', 'Node.js', 'MongoDB'],
      location: 'San Francisco, CA',
      postedTime: '2 hours ago',
      proposals: 12
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Need an AWS expert to set up scalable cloud infrastructure for our growing startup.',
      budget: { min: 3000, max: 5000 },
      deadline: '1 week',
      skills: ['AWS', 'Docker', 'Terraform'],
      location: 'Seattle, WA',
      postedTime: '5 hours ago',
      proposals: 8
    },
    {
      id: 3,
      title: 'Security Audit & Penetration Testing',
      description: 'Seeking a cybersecurity expert to conduct comprehensive security audit of our web application.',
      budget: { min: 2000, max: 4000 },
      deadline: '3 weeks',
      skills: ['Penetration Testing', 'Security Audits', 'OWASP'],
      location: 'Austin, TX',
      postedTime: '1 day ago',
      proposals: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find IT Projects</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl">
            Discover exciting opportunities to showcase your skills and grow your freelance career
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by keywords or skills..."
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
                      Project Budget
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Under $1,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$1,000 - $5,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$5,000 - $10,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">$10,000+</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Web Development</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Mobile Development</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">DevOps</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Cybersecurity</span>
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
                  {mockProjects.length} Projects Available
                </h2>
                <select className="border border-gray-300 rounded-md px-3 py-2">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Budget (High to Low)</option>
                  <option>Sort by: Budget (Low to High)</option>
                  <option>Sort by: Deadline</option>
                </select>
              </div>

              <div className="space-y-6">
                {mockProjects.map((project) => (
                  <Card key={project.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <DollarSign size={16} className="mr-1" />
                            ${project.budget.min.toLocaleString()} - ${project.budget.max.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {project.deadline}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {project.location}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, index) => (
                            <Badge key={index}>{skill}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Posted {project.postedTime} • {project.proposals} proposals
                          </span>
                          <Button variant="primary">
                            Submit Proposal
                          </Button>
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