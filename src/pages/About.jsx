import React from "react";
import { Heart, Users, Award, Target, CheckCircle } from "lucide-react";
import { clinicInfo } from "../data/mock";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Govila",
      role: "Chief Dental Surgeon",
      image: "https://images.unsplash.com/photo-1758205307854-5f0b57c27f17",
      specialization: "Cosmetic & Restorative Dentistry",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your comfort and wellbeing are our top priorities. We take time to understand your concerns and provide personalized treatment plans.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "Committed to delivering the highest quality dental care using advanced techniques and state-of-the-art technology.",
    },
    {
      icon: Users,
      title: "Inclusive Environment",
      description:
        "As a women-owned, LGBTQ+ friendly clinic, we provide a welcoming space for everyone in our community.",
    },
    {
      icon: Target,
      title: "Transparent Treatment",
      description:
        "We believe in honest communication, clear treatment plans, and no hidden costs. Your trust matters to us.",
    },
  ];

  const achievements = [
    { number: "615+", label: "Happy Patients" },
    { number: "4.8★", label: "Google Rating" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About Govila Dental Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive dental care in Aliganj,
              Lucknow
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
              >
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">
                  {item.number}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-600">
                  Women-Owned Clinic
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Our Story
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Govila Dental Consultation was established with a vision to
                  provide world-class dental care to the people of Lucknow. As a
                  women-owned clinic, we take pride in breaking barriers and
                  setting new standards in dental healthcare.
                </p>
                <p>
                  Our journey began with a simple mission: to make quality
                  dental care accessible, comfortable, and anxiety-free for
                  everyone. We believe that everyone deserves a healthy,
                  beautiful smile, regardless of their background or identity.
                </p>
                <p>
                  Located in the heart of Aliganj, we have grown into one of
                  Lucknow's most trusted dental clinics, serving over 615
                  satisfied patients with a consistent 4.8-star rating. Our
                  success is built on trust, expertise, and genuine care for our
                  patients.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {clinicInfo.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531"
                  alt="Modern Clinic Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your dental health
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Our team comprises qualified dentists and support staff who are
              passionate about delivering exceptional care. We continuously
              update our skills through ongoing education to bring you the
              latest in dental technology and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Patient-Focused Philosophy
          </h2>
          <p className="text-xl text-teal-100 leading-relaxed mb-8">
            We understand that visiting the dentist can be stressful. That's why
            we've created a warm, welcoming environment where you feel
            comfortable and cared for. Every treatment plan is customized to
            your unique needs, preferences, and budget. We take time to explain
            procedures, answer questions, and ensure you're informed every step
            of the way.
          </p>
          <a
            href={`tel:${clinicInfo.phone}`}
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg font-semibold"
          >
            Schedule Your Visit Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
