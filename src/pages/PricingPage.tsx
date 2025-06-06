import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export const PricingPage: React.FC = () => {
  const businessPlans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small businesses with occasional IT needs',
      features: [
        'Post up to 3 projects per month',
        'Access to verified freelancers',
        'Basic project management tools',
        'Email support',
        'Standard payment processing'
      ],
      notIncluded: [
        'Priority support',
        'Advanced analytics',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Ideal for growing companies with regular IT projects',
      features: [
        'Post unlimited projects',
        'Access to top-rated freelancers',
        'Advanced project management',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom contract templates'
      ],
      notIncluded: [
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large organizations with complex IT requirements',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced security features',
        'SLA guarantees',
        'Custom onboarding'
      ],
      notIncluded: []
    }
  ];

  const freelancerPlans = [
    {
      name: 'Basic',
      price: 0,
      description: 'Get started with freelancing on NIQ Network',
      features: [
        'Create professional profile',
        'Submit up to 10 proposals/month',
        'Basic portfolio showcase',
        'Standard payment processing',
        'Community support'
      ],
      notIncluded: [
        'Priority proposal visibility',
        'Advanced analytics',
        'Premium badges'
      ]
    },
    {
      name: 'Pro',
      price: 19,
      description: 'Boost your visibility and win more projects',
      features: [
        'Everything in Basic',
        'Unlimited proposals',
        'Priority proposal visibility',
        'Advanced portfolio features',
        'Client analytics',
        'Premium support'
      ],
      notIncluded: [
        'Featured profile placement'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 49,
      description: 'Maximum exposure and premium features',
      features: [
        'Everything in Pro',
        'Featured profile placement',
        'Advanced skill verification',
        'Priority customer support',
        'Custom profile URL',
        'Marketing assistance',
        'Exclusive project invitations'
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Business Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Businesses</h2>
            <p className="text-xl text-gray-600">Find and hire IT experts with confidence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {businessPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${plan.price}<span className="text-lg text-gray-500">/month</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <X size={20} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    fullWidth 
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For IT Professionals</h2>
            <p className="text-xl text-gray-600">Grow your freelance career with the right tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelancerPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-teal-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-teal-600 mb-2">
                      {plan.price === 0 ? 'Free' : `$${plan.price}`}
                      {plan.price > 0 && <span className="text-lg text-gray-500">/month</span>}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <X size={20} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? 'secondary' : 'outline'} 
                    fullWidth 
                    size="lg"
                  >
                    {plan.price === 0 ? 'Start Free' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are there any additional fees?
              </h3>
              <p className="text-gray-600">
                No hidden fees! The monthly subscription is all you pay. We don't take a percentage of your project payments.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};