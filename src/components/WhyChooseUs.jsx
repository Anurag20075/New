import React from "react";
import { Users, DollarSign, Clock, Shield, Award, Palette } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Professional Painters",
      description:
        "Skilled and experienced painters with 5+ years of expertise",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description:
        "Competitive pricing with transparent quotes and no hidden costs",
      color: "green",
    },
    {
      icon: Clock,
      title: "On-Time Completion",
      description: "Guaranteed project completion within the promised timeline",
      color: "orange",
    },
    {
      icon: Shield,
      title: "3-Month Warranty",
      description: "Comprehensive warranty coverage for complete peace of mind",
      color: "purple",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description:
        "Premium paints from trusted brands like Asian Paints & Berger",
      color: "red",
    },
    {
      icon: Palette,
      title: "Custom Solutions",
      description: "Personalized color consultation and design recommendations",
      color: "teal",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      icon: "text-blue-600",
      hover: "hover:bg-blue-50",
    },
    green: {
      bg: "bg-green-100",
      icon: "text-green-600",
      hover: "hover:bg-green-50",
    },
    orange: {
      bg: "bg-orange-100",
      icon: "text-orange-600",
      hover: "hover:bg-orange-50",
    },
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-600",
      hover: "hover:bg-purple-50",
    },
    red: {
      bg: "bg-red-100",
      icon: "text-red-600",
      hover: "hover:bg-red-50",
    },
    teal: {
      bg: "bg-teal-100",
      icon: "text-teal-600",
      hover: "hover:bg-teal-50",
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              PaintPro?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just painters - we're your partners in transforming your
            home with quality, reliability, and exceptional customer service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const colorClass = colorClasses[reason.color];

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100 ${colorClass.hover}`}
              >
                <div
                  className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mb-6`}
                >
                  <IconComponent className={`w-8 h-8 ${colorClass.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                1000+
              </div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                5+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {/* Asian Paints Logo Placeholder */}
            <div className="bg-gray-100 rounded-lg px-6 py-4 h-16 flex items-center justify-center min-w-[140px]">
              <span className="font-bold text-gray-700">Asian Paints</span>
            </div>

            {/* Berger Paints Logo Placeholder */}
            <div className="bg-gray-100 rounded-lg px-6 py-4 h-16 flex items-center justify-center min-w-[140px]">
              <span className="font-bold text-gray-700">Berger Paints</span>
            </div>

            {/* Nerolac Logo Placeholder */}
            <div className="bg-gray-100 rounded-lg px-6 py-4 h-16 flex items-center justify-center min-w-[140px]">
              <span className="font-bold text-gray-700">Nerolac</span>
            </div>

            {/* Dulux Logo Placeholder */}
            <div className="bg-gray-100 rounded-lg px-6 py-4 h-16 flex items-center justify-center min-w-[140px]">
              <span className="font-bold text-gray-700">Dulux</span>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Simple 4-Step Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "We visit your home for assessment and color recommendations",
              },
              {
                step: "02",
                title: "Instant Quote",
                description: "Get transparent pricing with no hidden costs",
              },
              {
                step: "03",
                title: "Professional Painting",
                description:
                  "Our expert team transforms your space with quality materials",
              },
              {
                step: "04",
                title: "Quality Check",
                description:
                  "Final inspection and warranty coverage for your peace of mind",
              },
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>

                {/* Connector Line (except for last item) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8 -translate-y-1/2"></div>
                )}

                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
