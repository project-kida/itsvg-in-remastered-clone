
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 wavy-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-7xl md:text-8xl font-bold mb-2">VISHWA</h1>
          <h2 className="text-2xl md:text-3xl text-gray mb-8">자부심</h2>
        </div>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed mb-12">
          <span className="text-gray">Hello! I&apos;m</span> <span className="font-semibold">Vishwa Gaurav</span>, <span className="text-gray">better known as</span> <span className="font-semibold">VishwaGauravIn</span> <span className="text-gray">on the internet</span>
        </p>

        <div className="text-center">
          <p className="text-lg md:text-xl font-semibold mb-2">
            Front-end focused Software Developer,
          </p>
          <p className="text-base md:text-lg text-gray max-w-2xl mx-auto">
            specialized in building scalable, user-centric web apps that prioritize{" "}
            <span className="relative inline-block">
              <span className="text-purple-light font-medium">performance</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-light/30 rounded-full"></span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
