import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "PaintPro transformed our living room beyond our expectations! The team was professional, punctual, and the quality of work is outstanding. They completed the project in just 3 days as promised.",
      service: "Standard Package",
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Excellent service from start to finish. The pricing was transparent, no hidden costs, and the painters were skilled. Our bedroom looks absolutely stunning now. Highly recommended!",
      service: "Premium Package",
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "I was initially skeptical about online booking, but PaintPro proved me wrong. The consultation was thorough, and they helped us choose the perfect colors. Great experience overall!",
      service: "Budget Package",
      image: "/api/placeholder/80/80",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Professional team, quality materials, and timely completion - everything you could ask for! The 3-month warranty gives us complete peace of mind. Will definitely use their services again.",
      service: "Standard Package",
      image: "/api/placeholder/80/80",
    },
    {
      id: 5,
      name: "Sunita Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Amazing transformation of our entire house! The team was respectful, clean, and efficient. The before and after difference is incredible. Money well spent!",
      service: "Premium Package",
      image: "/api/placeholder/80/80",
    },
    {
      id: 6,
      name: "Amit Gupta",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Quick, affordable, and high-quality service. The painters were experienced and took great care with our furniture and belongings. Couldn't be happier with the results!",
      service: "Budget Package",
      image: "/api/placeholder/80/80",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what hundreds of satisfied
            customers have to say about their experience with PaintPro.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12 shadow-lg relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200 opacity-50" />

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Customer Photo */}
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <StarRating rating={testimonials[currentIndex].rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Customer Info */}
              <div className="space-y-2">
                <div className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].service}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="text-gray-700 mt-4 mb-4">
                "
                {testimonial.text.length > 100
                  ? testimonial.text.substring(0, 100) + "..."
                  : testimonial.text}
                "
              </p>

              <div className="text-xs text-blue-600 font-medium">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 font-medium mb-2">
                Average Rating
              </div>
              <StarRating rating={5} />
            </div>
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
              <div className="text-gray-600 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the same level of quality and professionalism that has
            made hundreds of homeowners satisfied with their choice.
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
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
