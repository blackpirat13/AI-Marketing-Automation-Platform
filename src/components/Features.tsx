import React from 'react';
import { 
  Brain, 
  Users, 
  MessageSquare, 
  BarChart2, 
  Zap,
  Shield 
} from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze user behavior and preferences to create targeted campaigns.',
    icon: Brain
  },
  {
    name: 'Multi-Channel Marketing',
    description: 'Reach your audience across email, SMS, and social media platforms.',
    icon: MessageSquare
  },
  {
    name: 'User Segmentation',
    description: 'Create detailed user segments based on behavior and demographics.',
    icon: Users
  },
  {
    name: 'Analytics Dashboard',
    description: 'Comprehensive analytics to track campaign performance and ROI.',
    icon: BarChart2
  },
  {
    name: 'Automation Workflows',
    description: 'Create automated marketing workflows for consistent engagement.',
    icon: Zap
  },
  {
    name: 'Data Security',
    description: 'Enterprise-grade security to protect your customer data.',
    icon: Shield
  }
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered platform provides all the tools you need to automate and optimize your marketing campaigns.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;