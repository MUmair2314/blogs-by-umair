"use client";
import React from 'react';
import Particle from './Particles';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromRight, slideInFromLeft } from '@/utils/motion';

const Hero = () => {
  return (
    <main>
     
      <div className="lg:h-[92vh] h-full bg-[url('/banner.jpg')] bg-cover bg-center lg:mt-[-8rem] ">
      <motion.div
        variants={slideInFromRight(1)}
        className="flex-shrink-0 lg:hidden block mx-auto ml-[8rem] relative z-[20]"
      >
        <Image 
          src="/hafsa kamali.PNG" 
          alt="hafsa logo" 
          width={350} 
          height={350} 
          className="rounded-lg shadow-lg  bg-black bg-opacity-80 shadow-white "
        />
        
      
</motion.div>
        <div className="flex flex-col gap-7 ml-4 md:ml-[4rem]md:mt-0 mt-[6rem] items-center md:place-items-start justify-center h-full w-full px-4">
          <h1 className="text-5xl md:text-7xl font-semibold font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500 text-center md:text-left">
            UMAIR TECHSAGE
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 text-center md:text-left">
            Exploring the Boundless Potential of AI in Tech Landscape 
          </p>
          <p className="mt-2 text-lg md:text-2xl text-gray-300 text-center max-w-3xl">
            Exploring the frontiers of technology and AI.
          </p>
          <p className="mt-2 text-lg md:text-2xl text-gray-300 text-center max-w-3xl">
          Join us in unraveling the future of innovation.
          </p>
          <a
            href="#read-more"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-slate-600 via-gray-400 to-gray-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-white backdrop-opacity-25 drop-shadow-md"
          >
            Read More
          </a>
        </div>
      {/* Image Section */}
     
        <Image 
          src="/umair.jpg" 
          alt="hafsa logo" 
          width={350} 
          height={300} 
          className="rounded-lg shadow-lg hero-image  bg-black bg-opacity-50"
        />
        
      
     
        <Particle />
      </div>
     
    </main>
  );
};

export default Hero;
