import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-3">
        {renderStars(testimonial.rating)}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-xs text-teal-600">{testimonial.treatment}</p>
        </div>
        <span className="text-xs text-gray-500">{testimonial.date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
