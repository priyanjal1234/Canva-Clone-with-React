import React from 'react';
import { 
  Layout, 
  ImageIcon, 
  Type, 
  Share2, 
  Users, 
  Cloud,
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: <Layout className="h-6 w-6 text-purple-600" />,
    title: 'Drag & Drop Editor',
    description: 'Our intuitive editor lets you simply drag and drop elements to create stunning designs.'
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-teal-500" />,
    title: 'Million+ Assets',
    description: 'Access our vast library of stock photos, illustrations, icons, and more - all included.'
  },
  {
    icon: <Type className="h-6 w-6 text-pink-500" />,
    title: 'Typography Tools',
    description: 'Choose from hundreds of fonts or upload your own to make your designs truly unique.'
  },
  {
    icon: <Share2 className="h-6 w-6 text-blue-500" />,
    title: 'Easy Sharing',
    description: 'Share your designs with team members or clients with just a few clicks.'
  },
  {
    icon: <Cloud className="h-6 w-6 text-indigo-500" />,
    title: 'Cloud Storage',
    description: 'All your designs are automatically saved to the cloud, accessible from any device.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-yellow-500" />,
    title: 'Analytics',
    description: 'Track engagement with your designs and understand what resonates with your audience.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-purple-600">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a professional designer or just starting out, our platform has everything you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-purple-100 hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 rounded-full bg-purple-100">
            <div className="bg-white px-4 py-2 rounded-full flex items-center">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Perfect for teams</span>
            </div>
            <span className="px-4 text-purple-700">Real-time collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;