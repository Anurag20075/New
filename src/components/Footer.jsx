import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const serviceAreas = [
    "Mumbai",
    "Delhi NCR",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
  ];

  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Color Consultation",
    "Wall Preparation",
    "Texture Painting",
    "Waterproofing",
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Get Quote", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in painting services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">PaintPro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional home painting services with quality materials,
              experienced painters, and guaranteed satisfaction. Transform your
              home with India's trusted painting experts.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@paintpro.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@paintpro.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Pan India Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-6">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  {area}
                </div>
              ))}
            </div>

            {/* Paint Brands */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Trusted Paint Brands</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">Asian Paints</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">Berger Paints</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">Nerolac</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">Dulux</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Get painting tips, color trends, and exclusive offers directly
                in your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-yellow-400">3M</div>
              <div className="text-gray-300 text-sm">Warranty</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 PaintPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
