import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-slate-600">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-start">
        
        <div className="flex flex-col items-center lg:pl-36 w-full lg:w-auto"> 
          <img
            src="/images/VishwaCTF-Circular.png" 
            alt="Logo"
            className="h-40" 
          />
          <p className="mt-4 text-lg text-gray-400 text-center">&copy; 2025 CyberCell VIIT. All rights reserved.</p>
        </div>

        <div className='flex flex-col items-center justify-center flex-1 pt-6 mx-0 lg:mx-12 mt-16 lg:mt-0 w-full lg:w-auto'>
          <div className='flex gap-2 justify-center text-xl'>
            <p className='text-2xl'>Made with</p> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-500">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <p className='text-2xl'>by</p>
          </div>
          <div className='flex gap-2 justify-center mt-2'>
            <div>
            <p className='grid justify-center text-xl p-2'>Dev</p>
 <div className='flex gap-1'>
   <a href="https://www.instagram.com/devbhangale?igsh=MWQzNWt0bjBhazV3Ng==" target="_blank" rel="noopener noreferrer">
     <img src="/images/instagram.png" alt="insta" className='h-6 w-6 cursor-pointer'/>
   </a>
   <a href="https://www.linkedin.com/in/dev-bhangale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
     <img src="/images/linkedin.png" alt="ln" className='h-6 w-6 cursor-pointer'/>
   </a>
   <a href="https://github.com/devbh04" target="_blank" rel="noopener noreferrer">
     <img src="/images/gh.png" alt="twt" className='h-6 w-6 cursor-pointer'/>
   </a>
 </div>
</div>
<div className='h-20 border-l'></div>
<div>
 <p className='grid justify-center text-xl p-2'>Vyankatesh</p>
 <div className='flex gap-1 pl-5'>
   <a href="https://www.instagram.com/vyankatesh_123?igsh=MWFuOGZkeWY3Z3dwcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
     <img src="/images/instagram.png" alt="insta" className='h-6 w-6 cursor-pointer'/>
   </a>
   <a href="http://www.linkedin.com/in/vyankatesh-jadhav-1b60b52a2" target="_blank" rel="noopener noreferrer">
     <img src="/images/linkedin.png" alt="ln" className='h-6 w-6 cursor-pointer'/>
   </a>
   <a href="https://github.com/vyankateshjadhav1" target="_blank" rel="noopener noreferrer">
     <img src="/images/gh.png" alt="twt" className='h-6 w-6 cursor-pointer'/>
   </a>
 </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start space-x-0 lg:space-x-12 mt-8 lg:mt-0 w-full lg:w-auto lg:pr-52">
          <div className="text-center p-4 lg:text-left mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold mb-3">Socials</h3>
            <ul className="space-y-2 text-gray-400 text-lg">
              <li><a href="https://ctftime.org/ctf/599" className="hover:text-red-200">CTF Time</a></li>
              <li><a href="https://www.instagram.com/cybercell_viit/" className="hover:text-red-200">Instagram</a></li>
              <li><a href="https://in.linkedin.com/company/cybercell-viit" className="hover:text-red-200">LinkedIn</a></li>
              <li><a href="#" className="hover:text-red-200">Twitter</a></li>
              <li><a href="https://discord.gg/KjsqfMwJKR" className="hover:text-red-200">Discord</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-3 p-4">VishwaCTF</h3>
            <ul className="space-y-2 text-gray-400 text-lg">
              <li><a href="/events" className="hover:text-red-200">Events</a></li>
              <li><a href="/heroes" className="hover:text-red-200">Our Heroes</a></li>
              <li><a href="/about" className="hover:text-red-200">About</a></li>
              <li><a href="/" className="hover:text-red-200">VishwaCTF'25</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;