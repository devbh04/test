import React from 'react'

const AboutLanding = () => {
  return (
    <div className='text-white mt-16'>
        <div className='flex flex-col items-center gap-4'>
            <p className='text-5xl font-bold'>About VishwaCTF</p>
        </div>
        <div className='flex flex-col xl:flex-row items-center gap-4 mt-16 xl:mx-96 p-4'>
            <div className='text-xl xl:pl-40 xl:pr-2'>
                <p className='flex text-center justify-center pb-4'>CTF (Capture The Flag) is a kind of information security competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on Wikipedia to basic programming exercises, to hacking your way into a server to steal data. In these challenges, the contestant is usually asked to find a specific piece of text that may be hidden on the server or behind a webpage. This goal is called the flag, hence the name!</p>
                <p className='flex text-center justify-center'>VishwaCTF is the flagship event of CyberCell VIIT. At its inception, VishwaCTF' 21 was the 1st global CTF from Maharashtra and the 3rd largest from India.</p>
            </div>
            <div className='flex flex-col gap-4 xl:mr-40 xl:border-l xl:pl-4'>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">Cryptography</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">Digital Forensics</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">OSINT</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">Reverse Engineering</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">Steganography</p>
                <p className="text-red-200 border border-red-800 bg-red-800 bg-opacity-40 rounded-md px-4 p-2 text-2xl w-96 text-center">Web Exploitation</p>
            </div>
        </div>
    </div>
  )
}

export default AboutLanding