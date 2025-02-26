'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AppBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div
      className={`bg-black border-2 border-black rounded-xl xl:mt-4 xl:mx-64 m-4 xl:rounded-full bg-opacity-90 fixed top-0 left-0 right-0 z-50 flex flex-col xl:flex-row items-center justify-between transition-all duration-300  ${
        isScrolled ? 'border-red-700' : 'border-black'
      }`}
    >
      <div className='flex items-center justify-between w-full xl:w-auto'>
        <div className='flex items-center justify-center xl:ml-16 xl:gap-4 md:mb-0'>
          <Link href={"/"} className='h-28 w-28 cursor-pointer items-center flex justify-center'>
            <img 
              src="./images/cybercell.png" 
              alt="cybercell_logo"  
              className='h-20 w-20 cursor-pointer'
            />
          </Link>
          <Link className='text-3xl cursor-pointer' href={"/"}>CyberCell VIIT</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='xl:hidden text-red-700 focus:outline-none'
          aria-label='Toggle Menu'
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } xl:max-h-full xl:opacity-100 overflow-hidden transition-all duration-500 ease-in-out flex flex-col xl:flex-row items-center justify-center xl:mr-16 gap-4 md:gap-10 text-2xl mt-4 xl:mt-0`}
      >
        <Link
          href={"https://play.vishwactf.com"}
          className='text-lg border border-red-800 px-4 py-2 rounded-md hover:bg-red-800 hover:bg-opacity-30 cursor-pointer'
        >
          Play
        </Link>
        <Link
          href={"https://kzmkx37voyg2w8bbkuwa.lite.vusercontent.net/"}
          className='text-lg border border-red-800 px-4 py-2 rounded-md hover:bg-red-800 hover:bg-opacity-30 cursor-pointer'
        >
          Leaderboard
        </Link>
        <Link href={"/events"} className='text-lg border border-red-800 px-4 py-2 rounded-md hover:bg-red-800 hover:bg-opacity-30 cursor-pointer'>Events</Link>
        <Link href={"/heroes"} className='text-lg border border-red-800 px-4 py-2 rounded-md hover:bg-red-800 hover:bg-opacity-30 cursor-pointer'>Our Heroes</Link>
        <Link href={"/about"} className='text-lg border border-red-800 px-4 py-2 rounded-md hover:bg-red-800 hover:bg-opacity-30 cursor-pointer'>About</Link>
      </div>
    </div>
  );
};

export default AppBar;