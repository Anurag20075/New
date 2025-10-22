import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "bedroom", name: "Bedrooms" },
    { id: "living", name: "Living Room" },
    { id: "kitchen", name: "Kitchen" },
    { id: "exterior", name: "Exterior" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Bedroom Makeover",
      category: "bedroom",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Complete bedroom transformation with soothing blue tones",
      duration: "3 days",
      area: "200 sq ft",
    },
    {
      id: 2,
      title: "Elegant Living Room",
      category: "living",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Sophisticated living space with warm neutral colors",
      duration: "4 days",
      area: "350 sq ft",
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      category: "kitchen",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Fresh kitchen design with bright, clean finishes",
      duration: "2 days",
      area: "150 sq ft",
    },
    {
      id: 4,
      title: "Cozy Master Bedroom",
      category: "bedroom",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Relaxing master bedroom with earthy color palette",
      duration: "3 days",
      area: "250 sq ft",
    },
    {
      id: 5,
      title: "Spacious Living Area",
      category: "living",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Open concept living with modern color scheme",
      duration: "5 days",
      area: "450 sq ft",
    },
    {
      id: 6,
      title: "House Exterior Refresh",
      category: "exterior",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      description: "Complete exterior makeover with weather-resistant paint",
      duration: "7 days",
      area: "800 sq ft",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const BeforeAfterCard = ({ project }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
      <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Before/After Toggle */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex bg-black/50 rounded-lg p-1">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  !showAfter ? "bg-white text-black" : "text-white"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  showAfter ? "bg-white text-black" : "text-white"
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              showAfter ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 text-lg font-medium mb-2">
                  Before
                </div>
                <div className="text-gray-400 text-sm">Original State</div>
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              showAfter ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-700 text-lg font-medium mb-2">
                  After
                </div>
                <div className="text-gray-600 text-sm">Transformed</div>
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>

          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {project.duration}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              {project.area}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Amazing{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed hundreds of homes with our professional
            painting services. Each project tells a story of quality
            craftsmanship and customer satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied customers who have trusted us with
              their home transformation. Get your free quote today and see the
              PaintPro difference.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Start Your Project Today
            </button>
          </div>
        </div>

        {/* Process Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            See Our Process in Action
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Assessment",
                description: "Detailed inspection and surface preparation",
                image: "assessment",
              },
              {
                title: "Professional Application",
                description: "Expert painting with premium materials",
                image: "painting",
              },
              {
                title: "Final Inspection",
                description: "Quality check and customer walkthrough",
                image: "inspection",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-gray-500 font-medium">
                      {step.title}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
