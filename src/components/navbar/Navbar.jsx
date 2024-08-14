import Link from 'next/link';
import React from 'react';
import NavLinks from './navlinks/NavLinks';
import { Diversity2Outlined, ExitToApp, Message, Notifications } from '@mui/icons-material';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className='p-4 pb-6 md:p-6'>
    {/* // <div className=''> */}
      <div className='flex items-center justify-between p-4 bg-white rounded-lg'>
        <Link href='/' className="flex items-center space-x-2">
          {/* <span className="relative w-8 h-8">
            <Image 
              src="/solar_link-circle-bold.png" 
              alt="socialize Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </span> */}
          <Diversity2Outlined style={{ transform: 'rotate(-35deg)', fill: '#633CFF' }} />
          <span className="text-[#333] text-2xl font-bold flex items-center">
            socialize
          </span>
        </Link>
        <NavLinks />
        <div className="user-side">
          <ClerkLoading>          
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <div className="flex items-center justify-center gap-2">
                <Link href='/' className='text-[#633CFF] p-2 rounded-full hover:bg-[#EFEBFF] hover:cursor-pointer'>
                  <span className=''><Message /></span>
                </Link>
                <Link href='/' className='text-[#633CFF] p-2 rounded-full hover:bg-[#EFEBFF] hover:cursor-pointer'>
                  <span className=''><Notifications /></span>
                </Link>
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href='/sign-in' className='flex gap-2 bg-white rounded-lg text-[#633CFF] py-[5px] px-[10px] md:py-[9px] md:px-[17px] lg:py-[11px] lg:px-[27px] border border-[#633CFF] hover:bg-[#EFEBFF] hover:cursor-pointer'>
                <span className=''><ExitToApp /></span>
                <span className='hidden md:block'>Login/Register</span>
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
