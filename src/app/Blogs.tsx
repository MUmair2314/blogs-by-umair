"use client"

import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

import Link from 'next/link';
import Image from 'next/image';


const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"} 
    className=""
  >
 <motion.div
   variants={slideInFromRight(0.8)}
 >
                <h1  className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-transparent  text-center text-8xl font-serif md:text-7xl bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500"> "Where innovation meets inspiration."</h1>
      <h2 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] md:mr-[0.6rem] text-center text-[32px] text-6xl md:text-6xl text-white">"Creative Blogs"</h2>
      </motion.div>
      <motion.div
      variants={slideInFromLeft(1)}
      >
        
        <div className='w-[90%] h-[80%] mt-[6rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[6rem] items-center'>
            
          {/* service card */}
          <div className="parentDiv flex justify-center gap-5 items-center flex-wrap mt-8">
        <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[330px]bg-primary border-[2px] rounded-xl p-4'>
          <div className="">
            <Image src="/blogimages/Artificial Intelligence and Machine Learning.png" alt='Artificial Intelligence and Machine Learning'
            width={500}
            height={500}
            className="rounded-md w-[100%] h-[350px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Artificial Intelligence and Machine Learning</h1>
          </div>
          <div className="description mb-4">
            <p className="mt-[0.5rem] text-white text-opacity-75">Explore the latest advancements in AI and ML, including generative AI, natural language processing, and computer vision. Discuss their applications in various industries, such as healthcare, finance, and manufacturing.</p>
          </div>
          <div className="button">
            <button className="mx-auto px-4 py-2 cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/blog_1'>Read More</Link></button>
          </div>
        </div>

</div>
</div>
        </motion.div>
    </motion.div>
  );
}
export default Blog










