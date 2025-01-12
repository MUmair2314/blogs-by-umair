"use client"

import Image from "next/image";
import Hero from "./Hero";


import Link from 'next/link';

import { useRef} from "react";

import { motion, useInView } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

export default function Home() {
;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  
  return (
    <main className="h-full w-full">
    <div className="">
      
    </div>
    <div className="flex flex-col gap-20 overflow-hidden z-[1000]">
      <Hero />
</div>

<motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"} 
    className=""
  >
 <motion.div
   variants={slideInFromRight(0.8)}
 >
                <h1  className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-transparent  text-center text-5xl font-serif md:text-8xl bg-clip-text bg-gradient-to-r from-slate-600 via-gray-300 to-gray-500"> "CREATIVE BLOGS"</h1><br/><br />
      <h2 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] md:mr-[0.6rem] text-center text-[32px] text-6xl md:text-6xl text-white">"WHERE INNOVATION MEETS INSPIRATION"</h2><br />
      </motion.div>
      <motion.div
      variants={slideInFromLeft(1)}
      >
        
        <div className='w-[90%] h-[80%] items-center'>
  {/* service card */}
  <div className="justify-center gap-8 items-center flex-wrap mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ml-[1.6rem] md:ml-32 z-20">
    <div className="blog_card transform hover:scale-105 transition-transform duration-300 w-[100%] lg:w-[350px]bg-primary border-[2px] rounded-xl p-4">
        <div className="">
            <Image src="/blogimages/Artificial Intelligence and Machine Learning.png" alt="Artificial Intelligence and Machine Learning"
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
            <button className="mx-auto px-4 py-2 ml-[10rem] cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg hover:scale-110"><Link href='/Blog_1'>Read More</Link></button>
        </div>
  </div>
    <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[100%] lg:w-[350px]bg-primary border-[2px] rounded-xl p-4'>
      <div className="">
        <Image src="/blogimages/Cybersecurity and Data Privacy.png" alt='Cybersecurity and Data Privacy'
          width={500}
          height={500}
          className="rounded-md w-[100%] h-[350px]" />
      </div>
      <div className="title uppercase mb-2">
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Cybersecurity and Data Privacy</h1>
      </div>
      <div className="description mb-4">
        <p className="mt-[0.5rem] text-white text-opacity-75">Examine the increasing threat of cyberattacks and the importance of data privacy. Discuss the latest cybersecurity trends, best practices, and the impact of data breaches on individuals and organizations.</p>
      </div>
      <div className="button">
        <button className="mx-auto px-4 py-2 ml-[10rem] hover:scale-110 cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/Blog_2'>Read More</Link></button>
      </div>
    </div>

    <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[350px]bg-primary border-[2px] rounded-xl p-4'>
      <div className="">
        <Image src="/blogimages/Web3 and Blockchain Technology.png" alt='Web3 and Blockchain Technology'
          width={500}
          height={500}
          className="rounded-md w-[100%] h-[350px]" />
      </div>
      <div className="title uppercase mb-2">
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Web3 and Blockchain Technology</h1>
      </div>
      <div className="description mb-4">
        <p className="mt-[0.5rem] text-white text-opacity-75">Explore the decentralized web and blockchain technology, including cryptocurrencies, NFTs, and decentralized finance (DeFi). Discuss the potential benefits and challenges of this new paradigm, as well as its impact on traditional industries.</p>
      </div>
      <div className="button">
        <button className="mx-auto px-4 py-2 ml-[10rem] hover:scale-110 cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/Blog_3'>Read More</Link></button>
      </div>
    </div>

    <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[350px]bg-primary border-[2px] rounded-xl p-4'>
      <div className="">
        <Image src="/blogimages/Sustainability and Green Technol (2).png" alt='Sustainability and Green Technology'
          width={500}
          height={500}
          className="rounded-md w-[100%] h-[350px]" />
      </div>
      <div className="title uppercase mb-2">
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Sustainability and Green Technology</h1>
      </div>
      <div className="description mb-4">
        <p className="mt-[0.5rem] text-white text-opacity-75">Discuss the growing importance of sustainability in technology and the development of green and eco-friendly solutions. Explore topics like renewable energy, energy efficiency, and sustainable computing.</p>
      </div>
      <div className="button">
        <button className="mx-auto px-4 py-2  ml-[10rem] hover:scale-110 cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/Blog_4'>Read More</Link></button>
      </div>
    </div>

    <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[350px]bg-primary border-[2px] rounded-xl p-4'>
      <div className="">
        <Image src="/blogimages/Metaverse and Virtual Reality blog.png" alt='Metaverse and Virtual Reality'
          width={500}
          height={500}
          className="rounded-md w-[100%] h-[350px]" />
      </div>
      <div className="title uppercase mb-2">
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Metaverse and Virtual Reality</h1>
      </div>
      <div className="description mb-4">
        <p className="mt-[0.5rem] text-white text-opacity-75">Delve into the emerging world of the metaverse, a virtual space where people can interact and engage in various activities. Discuss the potential of VR and augmented reality (AR) to revolutionize industries like gaming, education, and social interactions.</p>
      </div>
      <div className="button">
        <button className="mx-auto px-4 py-2 ml-[10rem] hover:scale-110  cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/Blog_5'>Read More</Link></button>
      </div>
    </div>

    <div className='blog_card transform hover:scale-105 transition-transform duration-300 w-[350px]bg-primary border-[2px] rounded-xl p-4'>
      <div className="">
        <Image src="/blogimages/Future of Work and Automation.png" alt='Future of Work and Automation'
          width={500}
          height={500}
          className="rounded-md w-[100%] h-[350px]" />
      </div>
      <div className="title uppercase mb-2">
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">Future of Work and Automation</h1>
      </div>
      <div className="description mb-4">
        <p className="mt-[0.5rem] text-white text-opacity-75">Explore how technology is transforming the workplace, including automation, remote work, and the gig economy. Discuss the skills needed to thrive in the future of work and the potential impact of automation on jobs.</p>
      </div>
      <div className="button">
        <button className="mx-auto px-4 py-2 ml-[10rem] hover:scale-110  cursor-pointer bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-lg"><Link href='/Blog_6'>Read More</Link></button>
      </div>
    </div>
  </div>
</div>

        </motion.div>
    </motion.div>
   

    
    </main>
  );
}
