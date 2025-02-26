"use client";
import { Faq } from "@/components/shared/faqs";
import Info from "@/components/shared/info";
import SponsorSection from "@/components/shared/sponsorsection";
import TestimonialCarousel from "@/components/shared/testimonial";
import { TitleBox } from "@/components/shared/titlebox";
import Rules from "@/components/shared/rules";
import AboutLanding from "@/components/shared/about";
import Prize from "@/components/shared/prize";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <TitleBox />
      </div>
      <Info />
      <SponsorSection/>
      <Prize/>
      <TestimonialCarousel/>
      <AboutLanding/>
      <Rules/>
      <Faq />
    </>
  );
}