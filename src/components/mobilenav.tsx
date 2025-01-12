

import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>

      {/* Nav Menu */}

      <ul className={`text-white text-xl ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[70%] bg-black bg-opacity-90 space-y-10 z-[10006]`}
      >
              <li>
                <Link href="/" className="px-4 py-2 border border-white rounded-full hover:scale-110">Home</Link>
              </li>
              <li className="relative group">
                <Link href="/" className="px-4 py-2 border border-white rounded-full hover:scale-110">Blogs</Link>
                <ul className="absolute hidden group-hover:flex flex-col bg-gray-800 text-white rounded-lg mt-2 p-3 space-y-2">
                  <li><Link href='/Blog_1' className="hover:underline">Artificial Intelligence & Machine Learning</Link></li>
                  <li><Link href='/Blog_2' className="hover:underline">Metaverse & VR</Link></li>
                  <li><Link href='/Blog_3' className="hover:underline">Web3 & Blockchain</Link></li>
                  <li><Link href='/Blog_4' className="hover:underline">Sustainability & Green Tech</Link></li>
                  <li><Link href='/Blog_5' className="hover:underline">Cybersecurity & Data Privacy</Link></li>
                  <li><Link href='/Blog_6' className="hover:underline">Future of Work & Automation</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/about" className="px-4 py-2 border border-white rounded-full hover:scale-110">About</Link>
              </li>
              <li>
                <Link href="/contact" className="px-4 py-2 border border-white rounded-full hover:scale-110">Contact</Link>
              </li>



               {/* Close Button */}
        <li>
          <XMarkIcon
            onClick={closeNav}
            className="absolute top-[2.2rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white hover:text-violet-400 cursor-pointer"
          />
        </li>

        
<button className="inline-block items-centers bg-gradient-to-r from-slate-500 to-gray-700 border border-white py-2 px-3 focus:outline-none hover:from-slate-500 to-gray-500 hover:scale-110  text-white rounded-md text-base mt-4 md:mt-0">
  Log In
</button>
<button className="relative inline-block px-3 py-2 ml-[1rem] bg-gradient-to-r from-slate-500 to-gray-700 border border-white text-white rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#f2f2f2] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                        <span className='z-20 relative'>Light Mode</span>
                    </button>
            </ul>



      </div>
  )
}
export default NavMobile