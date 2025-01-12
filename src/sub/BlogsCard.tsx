





import Image from 'next/image';
import {motion} from 'framer-motion';

import React from 'react'
import { slideInFromLeft } from '@/utils/motion';

interface Props {
    image: string;
    title: string;
    description: string;
   
}
const BlogCard = ( {image, title , description,}: Props ) => {

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="shadow-md transition-all duration-500 bg-primary hover:bg-primary p-9 rounded-lg relative"
>
    <div className="relative w-full h-full items-center justify-center border border-white">
        <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="absolute top-0  w-auto h-auto object-cover rounded-lg"
        />
    </div>
    <motion.div
        variants={slideInFromLeft(0.8)}
        className="p-6 flex flex-col items-center justify-center text-center"
    >
        <h1 className="font-semibold text-center text-[28px] text-4xl mt-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-500">
            {title}
        </h1>
        <br />
        <p className="mt-[0.5rem] text-white text-opacity-75">
            {description}
        </p>
        <br />
        
    </motion.div>
</motion.div>
  )
}

export default BlogCard