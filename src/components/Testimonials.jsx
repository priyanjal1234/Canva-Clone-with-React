import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
    text: 'DesignFlux has completely transformed our marketing workflow. The templates are top-notch and the platform is incredibly intuitive.'
  },
  {
    name: 'Sarah Williams',
    role: 'Freelance Designer',
    company: 'Self-employed',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
    text: 'As a freelancer, I needed something that could help me deliver quality designs quickly. This platform has been a game-changer for my business.'
  },
  {
    name: 'Michael Chen',
    role: 'Social Media Manager',
    company: 'Brand Innovators',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 4,
    text: 'The social media templates save me hours every week. I can quickly customize designs that match our brand and keep our content fresh.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="text-purple-600">Creators</span> Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-white rounded-full p-2 shadow-md">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">"{testimonial.text}"</blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your design workflow?</h3>
          <p className="mb-6">Join thousands of creators and start designing today.</p>
          <button className="bg-white text-purple-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;