import React from 'react'
import { SponsorBox } from './sponsorbox'

const SponsorSection = () => {
  return (
    <div className="xl:-ml-10 p-6">
        <div className="flex justify-center items-center mt-8 xl:mt-12">
          <p className="text-3xl xl:text-5xl">Our Sponsors</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 xl:mt-12">
          <SponsorBox imgPath={"/images/title.png"} h="200" w="1000" bg="bg-black"/>
          <div className="flex flex-col justify-center text-center text-2xl xl:text-3xl mt-2">
            <p>HackerOne</p>
            <p className="text-base xl:text-xl">Title Sponsor</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 xl:mt-20">
          <SponsorBox imgPath={"/images/ps.png"} h="500" w="500" bg="bg-white"/>
          <div className="flex flex-col justify-center text-center text-2xl xl:text-3xl mt-2">
            <p>Traboda Labs</p>
            <p className="text-base xl:text-xl">Platform Sponsor</p>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="flex flex-col xl:flex-row justify-center items-center gap-20 mt-8 xl:mt-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <SponsorBox imgPath={"/images/gold1.png"} h="250" w="250" bg="bg-white"/>
            <div className="flex flex-col justify-center text-center xl:text-left text-2xl xl:text-3xl">
              <p className="flex justify-center">Altered Security</p>
              <p className="flex justify-center text-base xl:text-xl">Gold Sponsor</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <SponsorBox imgPath={"/images/bb.png"} h="100" w="1000" bg="bg-white"/>
            <div className="flex flex-col justify-center text-center xl:text-left text-2xl xl:text-3xl">
              <p className="flex justify-center">Burp Bounty</p>
              <p className="flex justify-center text-base xl:text-xl">Gold Sponsor</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <SponsorBox imgPath={"/images/letsdefend.png"} h="300" w="300" bg="bg-black"/>
            <div className="flex flex-col justify-center text-center xl:text-left text-2xl xl:text-3xl">
              <p className="flex justify-center">Lets Defend</p>
              <p className="flex justify-center text-base xl:text-xl">Gold Sponsor</p>
            </div>
          </div>
        </div>

        {/* Community and Certificate Sponsors */}
        <div className="flex flex-col justify-center items-center gap-16 mt-8 xl:mt-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <SponsorBox imgPath={"/images/CertificateSponsor.jpeg"} h="500" w="500" bg="bg-white"/>
            <div className="flex flex-col justify-center text-center xl:text-left text-2xl xl:text-3xl">
              <p className="flex justify-center">CertifyMe</p>
              <p className="flex justify-center text-base xl:text-xl">Certificate Sponsor</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <SponsorBox imgPath={"/images/CommunitySponsor.jpeg"} h="200" w="200" bg="bg-white"/>
            <div className="flex flex-col justify-center text-center xl:text-left text-2xl xl:text-3xl">
              <p className="flex justify-center">0x0 Pirates</p>
              <p className="flex justify-center text-base xl:text-xl">Community Sponsor</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SponsorSection