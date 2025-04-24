import React from "react";
import { MousePointerClick, Sparkles } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design Without Limits
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Create stunning designs, presentations, and social media content
              with our intuitive platform. No design experience needed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                <span onClick={() => {
                    navigate("/design")
                }}>Start Creating Free</span>
                <MousePointerClick className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://images.pexels.com/photos/13945322/pexels-photo-13945322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&crop=faces&facepad=2.5`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-bold">10,000+</span> creators trust our
                platform
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-300 rounded-full opacity-60 animate-bounce-slow"></div>
            <div className="absolute -bottom-8 left-8 w-16 h-16 bg-teal-300 rounded-full opacity-60 animate-ping-slow"></div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative transform transition-all hover:scale-105 duration-500">
              <div className="absolute top-0 right-0 p-2 bg-purple-100 rounded-bl-lg z-10">
                <Sparkles className="h-5 w-5 text-purple-600" />
              </div>
              <img
                src="https://images.pexels.com/photos/5967862/pexels-photo-5967862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Design Platform Preview"
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-purple-50 to-white border-t border-purple-100">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-purple-700">
                    Design Project
                  </span>
                  <div className="flex space-x-2">
                    {["#FFD700", "#FF6B6B", "#4ECDC4"].map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
