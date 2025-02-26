"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function SponsorBox({imgPath, h, w, bg}) {
  return (
      <BackgroundGradient className={"rounded-[22px] max-w-sm p-2 sm:p-4 dark:bg-zinc-900 " + bg}>
        <Image
          src={imgPath}
          alt={imgPath}
          height={h}
          width={w}
          className="object-contain"
        />
      </BackgroundGradient>
  );
}
