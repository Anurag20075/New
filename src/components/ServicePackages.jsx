import React from "react";
import { Check, Clock, Shield, Star } from "lucide-react";

const ServicePackages = () => {
  const packages = [
    {
      name: "Budget",
      price: "₹15-20",
      priceUnit: "per sq ft",
      description: "Perfect for basic room refresh",
      features: [
        "Basic paint (Asian Paints)",
        "Single coat application",
        "Standard color options",
        "Basic surface preparation",
        "No warranty",
      ],
      timeline: "2-3 days",
      popular: false,
      gradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      buttonStyle: "btn-outline",
    },
    {
      name: "Standard",
      price: "₹25-35",
      priceUnit: "per sq ft",
      description: "Most popular choice for homes",
      features: [
        "Premium paint (Berger/Asian Paints)",
        "Double coat application",
        "Wide color selection",
        "Complete surface preparation",
        "1-month warranty",
        "Minor wall repairs included",
      ],
      timeline: "3-4 days",
      popular: true,
      gradient: "from-blue-50 to-teal-50",
      borderColor: "border-blue-200",
      buttonStyle: "btn-primary",
    },
    {
      name: "Premium",
      price: "₹40-55",
      priceUnit: "per sq ft",
      description: "Luxury finish for your dream home",
      features: [
        "Ultra-premium paint brands",
        "Triple coat with primer",
        "Custom color matching",
        "Complete wall restoration",
        "3-month warranty",
        "Furniture protection included",
        "Post-service cleanup",
      ],
      timeline: "4-5 days",
      popular: false,
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      buttonStyle: "btn-primary",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing, no hidden costs. All packages include
            professional painters and quality assurance.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.borderColor
              } border-2 ${pkg.popular ? "scale-105 lg:scale-110" : ""}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </div>
                    <div className="text-gray-500 text-sm">{pkg.priceUnit}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-center space-x-2 mb-6 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Completion: {pkg.timeline}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full ${pkg.buttonStyle} text-lg py-3`}
                >
                  Get {pkg.name} Quote
                </button>

                {/* Warranty Badge */}
                {pkg.name !== "Budget" && (
                  <div className="flex items-center justify-center space-x-2 mt-4 text-green-600">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {pkg.name === "Standard" ? "1-Month" : "3-Month"} Warranty
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's Included in All Packages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Free Consultation
                </h4>
                <p className="text-gray-600 text-sm">
                  Expert advice on colors and finishes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h4>
                <p className="text-gray-600 text-sm">
                  Rigorous quality checks at every step
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  On-Time Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  Guaranteed completion within timeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
