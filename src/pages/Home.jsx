import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import {
  clinicInfo,
  services,
  testimonials,
  whyChooseUs,
  beforeAfterGallery,
} from "../data/mock";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { CheckCircle } from "lucide-react";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <LucideIcons.Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">
                {clinicInfo.rating} Rating
              </span>
              <span className="text-sm text-gray-600">
                • {clinicInfo.reviewCount}+ Reviews
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {clinicInfo.tagline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {clinicInfo.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {clinicInfo.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={scrollToBooking}
                className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                <LucideIcons.Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md border-2 border-teal-600 font-semibold"
              >
                <LucideIcons.Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1704455306925-1401c3012117"
                alt="Modern Dental Clinic"
                className="w-full h-80 sm:h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <LucideIcons.Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {clinicInfo.reviewCount}+
                  </p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Smiles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformations we've achieved for our patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              <span>View All Services</span>
              <LucideIcons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Govila Dental?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of patient-centered dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent =
                LucideIcons[item.icon] || LucideIcons.Shield;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentTestimonial]} />

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-teal-600 w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold"
            >
              <span>Read All Reviews</span>
              <LucideIcons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-teal-600 text-center">
        <LucideIcons.Clock className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Limited Slots Available Daily
        </h3>
        <p className="text-teal-100 mb-6 text-lg">
          Book your appointment now to secure your preferred time slot
        </p>
        <button
          onClick={scrollToBooking}
          className="w-full sm:w-auto bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg font-semibold"
        >
          Book Your Slot Now
        </button>
      </section>

      {/* Booking Form */}
      <section
        id="booking-form"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h2>
            <p className="text-lg text-gray-600">
              Fill in your details and we'll get back to you shortly
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-gray-600">{clinicInfo.address}</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8574!2d80.9432634!3d26.8946687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999576ee58ccf97%3A0x76f2ee7ab5446075!2sGovila+Dental+Consultation!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Govila Dental Consultation Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

// Booking Form Component
const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Appointment Request:", formData);
  //   setIsSubmitted(true);
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({ name: "", phone: "", date: "" });
  //   }, 3000);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Hello, I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}`;

    // WhatsApp link (replace with dentist's WhatsApp number with country code, e.g., +918XXXXXXXXX)
    const whatsappLink = `https://wa.me/919415592996?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, "_blank");

    // Show success message
    setIsSubmitted(true);

    // Reset form after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", date: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Appointment Requested!
        </h3>
        <p className="text-gray-600">
          We'll contact you shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100"
    >
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold text-lg"
        >
          Request Appointment
        </button>
      </div>
    </form>
  );
};

export default Home;
