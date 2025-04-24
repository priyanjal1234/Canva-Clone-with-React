import React, { useState } from "react";
import { ChevronRight, Filter } from "lucide-react";
import Button from "./Button";

const categories = [
  "All",
  "Social Media",
  "Presentations",
  "Print",
  "Marketing",
  "Documents",
];

const templates = [
  {
    id: 1,
    title: "Social Media Post",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/5698398/pexels-photo-5698398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: 2,
    title: "Business Presentation",
    category: "Presentations",
    image:
      "https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: 3,
    title: "Marketing Brochure",
    category: "Marketing",
    image:
      "https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: 4,
    title: "Resume Template",
    category: "Documents",
    image:
      "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Instagram Story",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/5384570/pexels-photo-5384570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: 6,
    title: "Business Card",
    category: "Print",
    image:
      "https://images.pexels.com/photos/5849549/pexels-photo-5849549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoverIndex, setHoverIndex] = useState(null);

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((template) => template.category === activeCategory);

  return (
    <section id="templates" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start With a <span className="text-purple-600">Template</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Browse thousands of professionally designed templates to jumpstart
              your creativity.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Templates <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 min-w-max p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className={`group relative rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                template.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 transform ${
                    hoverIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <h3 className="text-white font-bold text-lg mb-1">
                    {template.title}
                  </h3>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                  <div className="mt-3">
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
