import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { services, faqs, clinicInfo } from "../data/mock";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Check if URL has a hash to scroll to specific service
    const hash = window.location.hash;
    if (hash) {
      const serviceId = hash.replace("#", "");
      const service = services.find((s) => s.id === parseInt(serviceId));
      if (service) {
        setSelectedService(service);
        setTimeout(() => {
          document
            .getElementById(`service-${serviceId}`)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care solutions using advanced technology and
            proven techniques
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Detailed Service Information
          </h2>

          <div className="space-y-8">
            {services.map((service) => {
              const IconComponent =
                LucideIcons[service.icon] || LucideIcons.Star;
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-2/5 h-64 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          href={`tel:${clinicInfo.phone}`}
                          className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call to Book</span>
                        </a>
                        <Link
                          to="/contact"
                          className="flex items-center justify-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-2 border-teal-600 font-medium"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Request Appointment</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our dental services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-left pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Have More Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Call us or visit our clinic for
              personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-2 border-teal-600 font-medium"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Book your appointment today and experience the best dental care in
            Lucknow
          </p>
          <a
            href={`tel:${clinicInfo.phone}`}
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg font-semibold"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
