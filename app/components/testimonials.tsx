import React from "react";

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
    <section className="w-screen bg-[#EFF0F1] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-600">
            What Our Clients Say
          </p>
        </div>

        {/* Testimonials Grid/Slider */}
        <div className="w-full overflow-x-auto pb-6 md:pb-8 hide-scrollbar">
          <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[280px] md:w-full flex-shrink-0 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.logo}
                    alt={`Logo of ${testimonial.name}`}
                    className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="min-h-[100px] mb-4">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Rating and Author Info */}
                <div className="space-y-2">
                  <div className="text-yellow-400 text-lg">
                    {"★".repeat(testimonial.stars)}
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center mt-8 md:mt-10 text-base md:text-lg text-gray-900">
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
