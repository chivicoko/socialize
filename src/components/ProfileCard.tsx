import Image from 'next/image';
import React from 'react'
import Button from './button/Button';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-gray-500 text-sm flex flex-col gap-6'>
        <div className="relative w-full h-20 rounded-md">
            <Image 
            src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="friend request image"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
            <Image 
            src="https://images.pexels.com/photos/27702855/pexels-photo-27702855/free-photo-of-amigo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="friend request image"
            width={48}
            height={48}
            className='object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
            sizes="100%"
            />
        </div>

        <div className='flex flex-col items-center gap-2'>
            <span className='font-semibold'>Okoye, Victor Chibuzo</span>
            <div className="flex items-center gap-4">
                <div className="flex gap-1">
                    <span className="relative w-3 h-3 rounded-full">
                        <Image 
                        src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="friend request image"
                        fill
                        className='object-cover rounded-full'
                        sizes="100%"
                        />
                    </span>
                    <span className="relative w-3 h-3 rounded-full">
                        <Image 
                        src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="friend request image"
                        fill
                        className='object-cover rounded-full'
                        sizes="100%"
                        />
                    </span>
                    <span className="relative w-3 h-3 rounded-full">
                        <Image 
                        src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="friend request image"
                        fill
                        className='object-cover rounded-full'
                        sizes="100%"
                        />
                    </span>
                </div>
                <span className='text-xs text-gray-500'>500 Followers</span>
            </div>
            
            <Link href='/profile/id' className='cursor-pointer p-2 rounded-md text-sm text-white hover:text-[#633CFF] bg-[#633CFF] hover:bg-[#EFEBFF]'>My Profile</Link>
        </div>
    </div>
  )
}

export default ProfileCard;