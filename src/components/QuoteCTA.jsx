import React from "react";
import {
  Calculator,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const QuoteCTA = () => {
  const features = [
    {
      icon: Calculator,
      title: "Instant Pricing",
      description: "Get accurate quotes in 2 minutes",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Project starts within 48 hours",
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "100% satisfaction guaranteed",
    },
  ];

  const benefits = [
    "No hidden charges or surprise costs",
    "Free color consultation included",
    "Professional surface preparation",
    "Premium quality paints only",
    "Complete cleanup after work",
    "3-month warranty coverage",
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-white rounded-full translate-x-16"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white rounded-full translate-y-24"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Calculate Your Home Painting
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Estimate Now
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Know your exact cost in just 2 minutes. No surprises, no hidden
              fees - just transparent, affordable pricing for your dream home
              makeover.
            </p>

            {/* Main CTA Button */}
            <div className="mb-12">
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:text-blue-700 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-3">
                  <Calculator className="w-7 h-7" />
                  <span>Calculate My Estimate</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919876543210?text=Hi, I need a painting quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center space-x-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                </svg>
                <span>Quick WhatsApp Quote</span>
              </a>

              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center space-x-2"
              >
                <span>📞 Call: +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Benefits Grid */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              What You Get With Every Quote
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency Section */}
          <div className="text-center mt-16">
            <div className="bg-yellow-400 text-blue-900 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                🎨 Limited Time Offer - This Month Only!
              </h3>
              <p className="text-lg mb-4">
                Get <strong>20% OFF</strong> on all Standard & Premium packages
                when you book within 7 days of your quote.
              </p>
              <p className="text-sm font-medium">
                *Valid until end of this month. Cannot be combined with other
                offers.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2 Min</div>
              <div className="text-blue-200 text-sm">Quote Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200 text-sm">Happy Homes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3M</div>
              <div className="text-blue-200 text-sm">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
