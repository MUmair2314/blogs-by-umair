
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "../sub/Social";



const Footer = () => { 
    return (

<footer className="text-gray-400 bg-transparent body-font z-[50]">
  <div className="container mt-[28px] mb-[2rem] px-5 py-0 mx-auto lg:items-start  flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left z-[50]">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white ">
        <Image 
          src = "/umair.jpg"
           alt="h logo"
           width={500}
           height={500}
          className="w-24 h-24 rounded-full hover:scale-110 shadow-md shadow-white"
       / >
         
        
        <span className="ml-3 text-xl font-serif font-bold">M Umair</span>
      </a>
      <p className="mt-2 text-sm md:text-lg text-gray-500">An amazing web developer portfolio website to showcase his work and skills.</p>
    </div>
    <div className="flex-grow flex mb-0 md:mt-0 mt-36 md:text-left text-center z-[50]">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Home</h2>
        <nav className="list-none mb-0">
         <ul> <li>
            <Link className="text-gray-400 hover:text-white " href="/">Home </Link>
          </li>
          </ul>
        </nav>
      </div>
     
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About Me</h2>
        <nav className="list-none mb-0">
        <ul> <li>
            <Link className="text-gray-400 hover:text-white " href="/about">About Me </Link>
          </li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Blogs</h2>
        <nav className="list-none mb-0">
        <ul> <li>
            <Link className="text-gray-400 hover:text-white " href="/">Blogs </Link>
          </li>
          </ul>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">contact</h2>
        <nav className="list-none mb-0">
        <ul> <li>
            <Link className="text-gray-400 hover:text-white " href="/contact">Contact</Link>
          </li>
          </ul>

        </nav>
      </div>
      
    </div>
  </div>
  <div>
  
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 lg:flex lg:flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm lg:text-center text-left hover:cursor-pointer hover:text-white hover:scale-110">© Muhammad Umair — 
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1 hover:cursor-pointer hover:text-white hover:scale-110" target="_blank">@Umair___</a>
      </p>
      <div className="lg:flex flex-row absolute right-6 z-[50] space-x-4 lg:mt-0 mt-[-6rem]">
      <SocialIcons />
      </div>
    </div>
  </div>
</footer>
)
}
export default Footer