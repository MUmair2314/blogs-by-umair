
"use client"


import React, { useEffect, useState  } from 'react';
import Image from 'next/image';
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";



import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  const [navSticky, setNavSticky]= useState(false);

  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } 
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  } , []);

 const stickyStyle = navSticky ? "md:hidden hidden md:flex flex-row shadow-gray-100 shadow-sm":""

  return (
    <div className="h-full w-full ">
    <header className="text-gray-400  bg-slate-500 body-font">
      <div className="container mx-auto ${stickyStyle}  flex flex-wrap p-5 flex-col md:flex-row items-center  backdrop-blur-md z-[50]">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 ">
          <Image
            src="/A.png"
            alt=""
            width={500}
            height={500}
            className="w-10 h-10 bg-black p-2 text-black rounded-full hover:scale-125"
          />
          <span className="ml-2 text-xl font-serif font-medium">M Umair</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap font-serif font-thin items-center cursor-pointer text-base justify-center relative">
        <ul className="hidden md:flex w-auto space-x-6 items-center text-gray-200 text-xl ">
  <li> <Link href="/" className="mr-5 text-white  px-4 hover:scale-110 z-20 hover:underline hover:underline-offset-4"> Home </Link></li>
  <li className="group relative z-20">
  <Link href="/" className="mr-5 text-white  px-4 hover:scale-110  z-20 hover:underline hover:underline-offset-4">Blogs</Link>
  <ul className="dropdown-content hidden group-hover:flex flex-row space-x-2 bg-transparent text-[#f0f0f0] blog_card border border-[#2c2c2c] overflow-auto p-4 space-y-2 absolute left-0 top-full">
                                    <li><Link href='/Blog_1' className="text-[#fffdfd] hover:underline">Artificial Intelligence (AI) and Machine Learning</Link></li>
                                    <li><Link href='/Blog_2' className="text-[#fffdfd] hover:underline">Metaverse and Virtual Reality (VR)</Link></li>
                                    <li><Link href='/Blog_3' className="text-[#fffdfd] hover:underline">Web3 and Blockchain Technology</Link></li>
                                    <li><Link href='/Blog_4' className="text-[#fffdfd] hover:underline">
                                    Sustainability and Green Technology</Link></li>
                                    <li><Link href='/Blog_5' className="text-[#fffdfd] hover:underline">Cybersecurity and Data Privacy</Link></li>
                                    <li><Link href='/Blog_6' className="text-[#fffdfd] hover:underline">Future of Work and Automation</Link></li>
                                </ul>
  </li>
  <li> <Link href="/about" className="mr-5 text-white  px-4 hover:scale-110  z-20 hover:underline hover:underline-offset-4">About</Link></li>

  </ul>
  </nav>


<button className="relative md:inline-block ml-[2rem] hidden  flex-row gap-4 px-3 py-2 bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#f2f2f2] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                        <span className='z-20 relative'>Light Mode</span>
                    </button>
      
      </div>

    <Bars3CenterLeftIcon
            onClick={openNav}
            className="w-8 h-8 ml-auto absolute top-4 right-3 text-white md:hidden cursor-pointer"
          />
</header>
    </div>
     
  )
}
export default Navbar