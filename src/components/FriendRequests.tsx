import { Cancel, CheckCircle } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4'>
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link href='/' className='text-[#633CFF] text-xs'>See all</Link>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex items-center gap-4'>
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    src="https://images.pexels.com/photos/730541/pexels-photo-730541.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="friend request image"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <span className='font-semibold'>Ogochukwu Okoye</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <CheckCircle className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                <Cancel className='cursor-pointer fill-slate-400 hover:fill-slate-300' />
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex items-center gap-4'>
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    src="https://images.pexels.com/photos/27640363/pexels-photo-27640363/free-photo-of-woman-in-white-dress-sitting-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="friend request image"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <span className='font-semibold'>Anthony Berkely</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <CheckCircle className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                <Cancel className='cursor-pointer fill-slate-400 hover:fill-slate-300' />
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex items-center gap-4'>
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    src="https://images.pexels.com/photos/27573933/pexels-photo-27573933/free-photo-of-a-woman-standing-on-a-wooden-walkway-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="friend request image"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <span className='font-semibold'>Emma Vincent</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <CheckCircle className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                <Cancel className='cursor-pointer fill-slate-400 hover:fill-slate-300' />
            </div>
        </div>
    </div>
  )
}

export default FriendRequests;