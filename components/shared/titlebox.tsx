"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import CountDown from "./countdown";
import Image from "next/image";

export function TitleBox() {
  return (
    <div className="h-[560px] relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full translate-x-64 -translate-y-28">
        <Boxes />
      </div>

      <div className="absolute inset-0 w-full h-full bg-red-600 z-20 pointer-events-none opacity-70" 
        style={{
          maskImage: "radial-gradient(circle, transparent 40%, rgba(255,255,255,0.8) 80%, white 100%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 40%, rgba(255,255,255,0.8) 80%, white 100%)"
        }}
      />
      <Image
        src={"/images/vishwactf_h1_logo.png"}
        alt={"/images/vishwactf_h1_logo.png"}
        height={700}
        width={700}
        className="relative z-30 drop-shadow-lg p-4"
      />

      <div className="relative z-30 xl:-ml-10">
        <CountDown providedTargetDate={"2025-03-04T15:59:59Z"} />
      </div>

      <div className="text-center mt-10 text-neutral-300 relative z-30 flex gap-10">
        <button className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl cursor-pointer drop-shadow-lg">Register</button>
        <button className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-2 p-2 text-2xl cursor-pointer drop-shadow-lg">Join Discord</button>
      </div>
    </div>
  );
}
