import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Profile } from '../../types';
import { profilesAPI } from '../../services/api';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// Mock data for development/demo purposes
const mockProfiles: Profile[] = [
  {
    id: 1,
    user_id: 101,
    display_name: 'Jennifer Lopez',
    title: 'Senior Full Stack Developer',
    description: '10+ years experience in web development with React, Node.js, and AWS.',
    skills: [{ id: 1, name: 'React' }, { id: 2, name: 'Node.js' }, { id: 3, name: 'AWS' }],
    hourly_rate: 85,
    avatar_url: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'San Francisco, CA',
    rating: 4.9,
    review_count: 47,
    portfolio_items: [],
    experience: [],
    education: [],
    featured: true
  },
  {
    id: 2,
    user_id: 102,
    display_name: 'Michael Johnson',
    title: 'DevOps Engineer & Cloud Architect',
    description: 'Specializing in AWS, Docker, Kubernetes, and CI/CD pipelines.',
    skills: [{ id: 4, name: 'AWS' }, { id: 5, name: 'Docker' }, { id: 6, name: 'Kubernetes' }],
    hourly_rate: 95,
    avatar_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Seattle, WA',
    rating: 4.8,
    review_count: 32,
    portfolio_items: [],
    experience: [],
    education: [],
    featured: true
  },
  {
    id: 3,
    user_id: 103,
    display_name: 'Sophia Williams',
    title: 'Cybersecurity Specialist',
    description: 'Expert in security audits, penetration testing, and compliance.',
    skills: [{ id: 7, name: 'Penetration Testing' }, { id: 8, name: 'Security Audits' }, { id: 9, name: 'Compliance' }],
    hourly_rate: 110,
    avatar_url: 'https://images.pexels.com/photos/5905580/pexels-photo-5905580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Austin, TX',
    rating: 5.0,
    review_count: 21,
    portfolio_items: [],
    experience: [],
    education: [],
    featured: true
  },
  {
    id: 4,
    user_id: 104,
    display_name: 'David Chen',
    title: 'AI & Machine Learning Engineer',
    description: 'Building cutting-edge AI solutions with TensorFlow and PyTorch.',
    skills: [{ id: 10, name: 'TensorFlow' }, { id: 11, name: 'PyTorch' }, { id: 12, name: 'Python' }],
    hourly_rate: 120,
    avatar_url: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Boston, MA',
    rating: 4.7,
    review_count: 18,
    portfolio_items: [],
    experience: [],
    education: [],
    featured: true
  }
];

export const FeaturedProfiles: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const featuredProfiles = await profilesAPI.getFeaturedProfiles();
        setProfiles(featuredProfiles);
      } catch (err) {
        // Silently fall back to mock data for demo purposes
        setProfiles(mockProfiles);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>Loading featured profiles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top IT Professionals</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover our featured IT experts, ready to help with your next project.
            </p>
          </div>
          <Button 
            as={Link}
            to="/profiles"
            variant="outline"
            className="mt-4 md:mt-0"
            rightIcon={<ArrowRight size={16} />}
          >
            View All Profiles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <Card key={profile.id} hoverable className="h-full flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={profile.avatar_url || 'https://via.placeholder.com/300'}
                    alt={profile.display_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="info" className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{profile.display_name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{profile.title}</p>
                  
                  <div className="flex items-center mb-3">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{profile.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({profile.review_count} reviews)</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">
                    {profile.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(profile.skills || []).slice(0, 3).map((skill) => (
                      <Badge key={skill.id}>{skill.name}</Badge>
                    ))}
                    {(profile.skills || []).length > 3 && (
                      <Badge variant="info">+{(profile.skills || []).length - 3}</Badge>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">${profile.hourly_rate}/hr</span>
                      <Button
                        as={Link}
                        to={`/profiles/${profile.id}`}
                        variant="outline"
                        size="sm"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};