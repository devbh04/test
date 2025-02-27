"use client";
import Image from "next/image";
import React from "react";

export function HeroCard({ role, name, imglink, insta, ln, x }) {
  return (
    <div className="h-max w-max border border-transparent hover:border-slate-200 rounded-lg m-1 p-4 group">
      {/* Image Container with Fixed Size */}
      <div className="h-36 w-36 overflow-hidden rounded-full">
        <img
          src={imglink}
          alt="hero"
          className="w-full h-full object-cover" // Ensures the image covers the container without distortion
        />
      </div>
      <div className="grid justify-center">
        <h2 className="text-xl font-semibold flex justify-center">{role}</h2>
        <p className="text-md text-gray-500 flex justify-center">{name}</p>
      </div>
      <div className="flex gap-1 justify-center xl:opacity-30 xl:pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <a href={insta} target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="insta" className="h-6 w-6 cursor-pointer" />
        </a>
        <a href={ln} target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="ln" className="h-6 w-6 cursor-pointer" />
        </a>
        <a href={x} target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="twt" className="h-6 w-6 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}