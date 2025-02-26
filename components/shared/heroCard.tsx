"use client";
import React from "react";

export function HeroCard({role, name, imglink}) {
  return (
    <div className="h-max w-max border border-transparent hover:border-slate-200 rounded-lg m-1 p-4">
      <img src={imglink} alt="hero" className="h-36 w-36 rounded-full" />
      <div className="grid justify-center">
        <h2 className="text-xl font-semibold flex justify-center">{role}</h2>
        <p className="text-md text-gray-500 flex justify-center">{name}</p>
      </div>
    </div>
  );
}
