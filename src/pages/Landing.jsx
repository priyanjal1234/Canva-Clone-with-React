import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Templates from "../components/Templates";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Templates />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
