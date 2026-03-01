import React, { useState } from "react";
import { Star, Filter, ThumbsUp } from "lucide-react";
import { testimonials, clinicInfo } from "../data/mock";
import TestimonialCard from "../components/TestimonialCard";

const Reviews = () => {
  const [filterRating, setFilterRating] = useState("all");
  const [filterTreatment, setFilterTreatment] = useState("all");

  // Get unique treatments
  const treatments = ["all", ...new Set(testimonials.map((t) => t.treatment))];

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const ratingMatch =
      filterRating === "all" || testimonial.rating === parseInt(filterRating);
    const treatmentMatch =
      filterTreatment === "all" || testimonial.treatment === filterTreatment;
    return ratingMatch && treatmentMatch;
  });

  const averageRating = clinicInfo.rating;
  const totalReviews = clinicInfo.reviewCount;

  // Rating distribution (mock data)
  const ratingDistribution = [
    { stars: 5, count: 512, percentage: 83 },
    { stars: 4, count: 78, percentage: 13 },
    { stars: 3, count: 18, percentage: 3 },
    { stars: 2, count: 5, percentage: 1 },
    { stars: 1, count: 2, percentage: 0 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Patient Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our patients have to say about their experience
            </p>
          </div>

          {/* Rating Overview */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Overall Rating */}
              <div className="text-center md:border-r border-gray-200">
                <div className="mb-4">
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    {averageRating}
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-6 h-6 ${
                          index < Math.floor(averageRating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Based on{" "}
                    <span className="font-semibold">
                      {totalReviews}+ reviews
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <ThumbsUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    97% Recommended
                  </span>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {ratingDistribution.map((rating) => (
                  <div
                    key={rating.stars}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium text-gray-700">
                        {rating.stars}
                      </span>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by:</span>
            </div>

            {/* Rating Filter */}
            <div className="flex items-center space-x-2">
              <label htmlFor="rating-filter" className="text-sm text-gray-600">
                Rating:
              </label>
              <select
                id="rating-filter"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
              </select>
            </div>

            {/* Treatment Filter */}
            <div className="flex items-center space-x-2">
              <label
                htmlFor="treatment-filter"
                className="text-sm text-gray-600"
              >
                Treatment:
              </label>
              <select
                id="treatment-filter"
                value={filterTreatment}
                onChange={(e) => setFilterTreatment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              >
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment === "all" ? "All Treatments" : treatment}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredTestimonials.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                Showing{" "}
                <span className="font-semibold">
                  {filteredTestimonials.length}
                </span>{" "}
                review{filteredTestimonials.length !== 1 ? "s" : ""}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No reviews found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center border-2 border-teal-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold text-gray-900">
                Google Reviews
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Read all {totalReviews}+ verified reviews on our Google Business
              Profile
            </p>
            <a
              href="https://www.google.com/search?q=govila+dental+consultation+aliganj+lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              View on Google
            </a>
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Share your experience and help others discover quality dental care
          </p>
          <a
            href="https://www.google.com/search?q=govila+dental+consultation+aliganj+lucknow#lrd=0x0:0x0,3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg font-semibold"
          >
            Write a Review
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
