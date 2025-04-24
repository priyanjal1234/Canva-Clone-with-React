import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      { text: 'Up to 5 designs per month', included: true },
      { text: 'Basic templates', included: true },
      { text: 'Limited stock photos', included: true },
      { text: 'Standard export quality', included: true },
      { text: 'Team collaboration', included: false },
      { text: 'Premium templates', included: false },
      { text: 'Brand kit', included: false },
      { text: 'Priority support', included: false }
    ],
    cta: 'Start for Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '12',
    description: 'Best for professionals',
    features: [
      { text: 'Unlimited designs', included: true },
      { text: 'Access to all templates', included: true },
      { text: 'Unlimited stock photos', included: true },
      { text: 'Premium export quality', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Premium templates', included: true },
      { text: 'Brand kit', included: true },
      { text: 'Priority support', included: false }
    ],
    cta: 'Get Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '49',
    description: 'For teams and organizations',
    features: [
      { text: 'Unlimited designs', included: true },
      { text: 'Access to all templates', included: true },
      { text: 'Unlimited stock photos', included: true },
      { text: 'Premium export quality', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Premium templates', included: true },
      { text: 'Brand kit', included: true },
      { text: 'Priority support', included: true }
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-purple-600">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
          <div className="mt-6 inline-flex bg-gray-100 p-1 rounded-full">
            <button className="py-2 px-4 rounded-full bg-white shadow-sm text-sm font-medium">
              Monthly
            </button>
            <button className="py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              Annual (Save 20%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-xl border-2 border-purple-500 relative transform hover:-translate-y-2'
                  : 'shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold py-1 px-4 rounded-b-md">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto">
          <p className="text-center text-gray-600">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;