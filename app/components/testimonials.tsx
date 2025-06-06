import React from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/Frame274.png",
    text: "Impressed by the seamless communication and professionalism throughout the project.",
    stars: 5,
    name: "Mr. Sunil",
    designation: "Managing director",
  },
  {
    logo: "/Frame283.png",
    text: "Exceptional attention to detail and dedication to meeting our specific needs.",
    stars: 5,
    name: "Mr. Hari",
    designation: "Managing director",
  },
  {
    logo: "/Frame289.png",
    text: "Highly satisfied with the quality of service and timely delivery of results.",
    stars: 5,
    name: "Mr. Kasif",
    designation: "General Manager",
  },
  {
    logo: "/Frame291.png",
    text: "Consistently exceeded expectations, demonstrating a true commitment to client success.",
    stars: 5,
    name: "Mr. Tausif",
    designation: "General Manager",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-screen bg-[#EFF0F1] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
            What Our Clients Say
          </p>
        </div>

        {/* Testimonials Grid/Slider */}
        <div className="w-full overflow-x-auto pb-4 sm:pb-6 md:pb-8 hide-scrollbar">
          <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[220px] sm:w-[280px] md:w-full flex-shrink-0 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="flex justify-center mb-2 sm:mb-4">
                  <Image
                    src={testimonial.logo}
                    alt={`Logo of ${testimonial.name}`}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] object-contain"
                    width={90}
                    height={90}
                    loading="lazy"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="min-h-[60px] sm:min-h-[100px] mb-2 sm:mb-4">
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Rating and Author Info */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-yellow-400 text-base sm:text-lg">
                    {"★".repeat(testimonial.stars)}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center mt-6 sm:mt-8 md:mt-10 text-xs sm:text-base md:text-lg text-gray-900">
          and many more...
        </p>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
