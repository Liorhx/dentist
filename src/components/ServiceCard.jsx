import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

const ServiceCard = ({ service, featured = false }) => {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Star;

  return (
    <div
      className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        featured ? "shadow-xl" : "shadow-md"
      } border border-gray-100`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <IconComponent className="w-6 h-6 text-teal-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium text-sm group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
