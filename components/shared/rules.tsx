import Image from 'next/image'
import React from 'react'

const Rules = () => {
  return (
    <div className='text-white mt-16'>
        <div className='flex flex-col items-center gap-4 p-4'>
            <p className='text-5xl font-bold'>Some rules that you need to follow!</p>
        </div>
        <div className='flex flex-col xl:flex-row items-center gap-4 mt-16 xl:mx-64 p-4'>
            <div className='text-xl flex flex-col gap-1 xl:pr-2 xl:border-r'>
                <p className='flex text-2xl pb-4'>Welcome to VishwaCTF 2025. Please read the rules before you begin.</p>
                <p className='flex '>The flag format is VishwaCTF, unless specified otherwise.</p>
                <p className='flex '>Attacking the web server is strictly prohibited and will get you disqualified.</p>
                <p className='flex '>Brute forcing flags on this platform is not allowed and will not lead to success.</p>
                <p className='flex '>Any questions regarding challenges or the platform should be asked via our Discord server.</p>
                <p className='flex '>Teams of minimum 1 and maximum 4 members are allowed.</p>
                <p className='flex '>There is no restriction so as to who can participate in the CTF.</p>
                <p className='flex '>Posting or trading flags in any channel is strictly prohibited; such activities will lead to instant disqualification.</p>
                <p className='flex '>Do not post write-ups until the CTF is over.</p>
                <p className='flex '>Violation of any of the rules may lead to deletion of the messages, or even getting banned from the Discord server and VishwaCTF 2025.</p>
                <p className='flex '>Regarding all disputes, the decision by admins is final.</p>
            </div>
            <div className='flex flex-col gap-4 xl:pl-4'>
                <Image
                    src='/images/rules.gif'
                    alt='/images/rules.gif'
                    height={1000}
                    width={1000}
                    className='rounded-lg'
                />
            </div>
        </div>
    </div>
  )
}

export default Rules
