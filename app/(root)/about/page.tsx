import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-black bg-radial-gradientevent overflow-hidden">
      {/* Auto-scrollable Content */}
      <div className="scroll-container pt-16"> {/* Move container down */}
        {/* Heading Section with Red Background and Fade Effect */}
        <div className="relative py-2 mb-8 sm:mb-12 rounded-md overflow-hidden">
          {/* Fade-out Background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-600 w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent 10%, black 25%, black 75%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 10%, black 25%, black 75%, transparent 90%)',
            }}
          ></div>

          {/* Heading Text */}
          <h1 className="text-2xl p-2 sm:text-3xl md:text-4xl font-bold text-white text-center relative z-10">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto text-white">
          {/* CyberCell Section */}
          <section className="mb-12 flex flex-col p-4 sm:flex-row items-center gap-12"> {/* Increased gap */}
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                CyberCell
              </h2>
              <p className="text-base sm:text-lg">
                CyberCell VIIT is a club of cybersecurity enthusiasts formed by Vishwakarma Institute of Information Technology, Pune in December 2013. Dedicated to making the digital realm safer and more informed, CyberCell VIIT is a dynamic club that brings together tech enthusiasts, ethical hackers, and cyber-aware individuals on a common platform. Our mission is to empower everyone with the knowledge and skills needed to navigate the complex landscape of cyberspace responsibly.
              </p>
            </div>
            <div className="sm:w-1/2 flex justify-center">
              <img
                src="\images\VishwaCTF-Circular.png" // Replace with your image URL
                alt="CyberCell"
                className="w-72 h-auto rounded-lg"
              />
            </div>
          </section>

          {/* VishwaCTF Section */}
          <section className="mb-12 flex flex-col  p-2 sm:flex-row-reverse items-center gap-12"> {/* Increased gap */}
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                VishwaCTF
              </h2>
              <p className="text-base sm:text-lg">
                CTF (Capture The Flag) is a kind of information security competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on Wikipedia to basic programming exercises, to hacking your way into a server to steal data. In these challenges, the contestant is usually asked to find a specific piece of text that may be hidden on the server or behind a webpage. This goal is called the flag, hence the name! VishwaCTF is the flagship event of CyberCell VIIT. At its inception, VishwaCTF is the 1st global CTF from Maharashtra and the 3rd largest from India.
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src="\images\vishwactf_h1_logo.png" // Replace with your image URL
                alt="VishwaCTF"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* VIIT Section */}
          <section className="mb-12 flex flex-col p-2 sm:flex-row items-center gap-12"> {/* Increased gap */}
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                VIIT
              </h2>
              <p className="text-base sm:text-lg">
                The Vishwakarma Institute of Information Technology is an autonomous institute of engineering in Pune, India. Established in 2002, it is affiliated to the Savitribai Phule Pune University. The college is run by the Bansilal Ramanath Agarwal Charitable Trust. In 2017 the University Grant Commission granted it autonomous status. It is consistently ranked as one of the top colleges in Pune, with the recognition and approval of the All India Council of Technical Education, New Delhi.
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src="\images\VIIT01.webp" // Replace with your image URL
                alt="VIIT"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}