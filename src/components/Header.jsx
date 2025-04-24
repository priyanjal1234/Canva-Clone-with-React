import React, { useState, useEffect } from "react";
import { Menu, X, Paintbrush } from "lucide-react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Paintbrush className="h-8 w-8 text-purple-700" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
              DesignFlux
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
            >
              Pricing
            </a>
            <Button variant="outline">Login</Button>
            <Button>Sign Up Free</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-700 hover:text-purple-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#templates"
              className="block text-gray-700 hover:text-purple-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="block text-gray-700 hover:text-purple-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" fullWidth>
                Login
              </Button>
              <Button fullWidth>Sign Up Free</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
