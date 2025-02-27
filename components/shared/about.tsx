import React from 'react'

const AboutLanding = () => {
  return (
    <div className='text-white mt-16'>
        <div className='flex flex-col items-center gap-4 p-4'>
            <p className='text-5xl font-bold'>About VishwaCTF</p>
        </div>
        <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-4 mt-16 p-4'>
            <div className='text-xl xl:pr-2'>
                <p className='flex text-center justify-center pb-4 xl:w-[900px]'>CyberCell VIIT proudly presents VishwaCTF, our flagship cybersecurity competition that has grown into a globally recognized event. From a small campus gathering in 2020, it became Maharashtra’s first global CTF and India’s third-largest in 2021. Since then, VishwaCTF has expanded rapidly, with our latest edition drawing 3,200+ participants from 98+ countries. With strong industry support, we’ve continually raised the challenge complexity, prize pool, and overall experience. As we prepare for VishwaCTF'25, our 5th edition promises to be the most challenging and rewarding yet, further cementing our place in the global CTF community.</p>
            </div>
            <div className='flex flex-col gap-4  xl:border-l xl:pl-4'>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">Cryptography</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">Digital Forensics</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">OSINT</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">Reverse Engineering</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">Steganography</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-72 xl:w-96 text-center">Web Exploitation</p>
            </div>
        </div>
    </div>
  )
}

export default AboutLanding