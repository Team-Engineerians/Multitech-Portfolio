import React from "react";

const testimonials = [
  {
    logo: "/clients/sumistarr.png",
    text: "Impressed by the seamless communication and professionalism throughout the project.",
    stars: 5,
    name: "Mr. Sunil",
    designation: "Managing director",
  },
  {
    logo: "/clients/pinewood.png",
    text: "Exceptional attention to detail and dedication to meeting our specific needs.",
    stars: 5,
    name: "Mr. Hari",
    designation: "Managing director",
  },
  {
    logo: "/clients/arabtec.png",
    text: "Highly satisfied with the quality of service and timely delivery of results.",
    stars: 5,
    name: "Mr. Kasif",
    designation: "General Manager",
  },
  {
    logo: "/clients/alkazim.png",
    text: "Consistently exceeded expectations, demonstrating a true commitment to client success.",
    stars: 5,
    name: "Mr. Tausif",
    designation: "General Manager",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-screen h-[685px] bg-[#e1ecf7] py-20 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center">Testimonials</h2>
      <p className="text-sm text-gray-600 mb-10 text-center">
        What Our Clients Say
      </p>

      <div className="flex justify-center gap-18 w-full mt-8 px-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white w-[280px] h-[360px] rounded-xl px-5 pt-4 pb-4 shadow-md flex-shrink-0 flex flex-col justify-between"
          >
            <img
              src={testimonial.logo}
              alt={`Logo of ${testimonial.name}`}
              className="w-[100px] h-[100px] object-contain mt-2 mb-3"
            />

            <p className="text-[13px] text-gray-800 leading-[1.4] mb-1">
              “{testimonial.text}”
            </p>

            <div className="flex flex-col gap-2px mt-1">
              <div className="text-yellow-400 text-sm leading-none">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="text-[13px] text-black font-medium leading-none">
                {testimonial.name}
              </p>
              <p className="text-[12px] text-gray-400 leading-none">
                {testimonial.designation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-15 text-gray-500 text-md">and many more...</p>
    </section>
  );
};

export default TestimonialsSection;
