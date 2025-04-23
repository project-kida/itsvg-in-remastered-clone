
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "As a product guy, I was impressed and found it super intuitive to use. It truly delighted me how simple it was to navigate and perfect the aesthetics of it. It's like a friend helping you when you needed most! I genuinely hope more products come from your end which makes our life easier.",
      author: "Sahil Khosla",
      position: "Senior PM @ Google",
    }
  ];

  return (
    <section className="py-16 container max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <div className="flex justify-center mb-6">
          <span className="text-6xl text-purple">"</span>
        </div>
        
        <p className="text-lg md:text-xl text-center mb-6 text-gray-dark">
          {testimonials[0].text}
        </p>
        
        <div className="text-center">
          <p className="font-semibold">{testimonials[0].author}</p>
          <p className="text-sm text-gray">{testimonials[0].position}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
