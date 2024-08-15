import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '@/components/button/Button';

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4'>
        <div className="flex items-center font-medium">
            <span className="text-gray-500">Birthdays</span>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex items-center gap-4'>
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    src="https://images.pexels.com/photos/18091669/pexels-photo-18091669/free-photo-of-istanbul-istinye.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="friend request image"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <span className='font-semibold'>Emily Nwankwor</span>
            </div>
            <div className='flex justify-end'>
                <Button process={'processing...'} btnText={'Celebrate'} classes={'cursor-pointer px-2 py-1 rounded-md text-sm text-white hover:text-[#633CFF] bg-[#633CFF] hover:bg-[#EFEBFF]'} />
            </div>
        </div>

        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <span className="relative w-8 h-8 rounded-full">
                <Image 
                src="/gift.png" 
                alt="friend request image"
                fill
                className='object-cover rounded-full'
                sizes="100%"
                />
            </span>
            <Link href='' className='flex flex-col gap-1 text-xs'>
                <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                <span className='text-gray-500'>See other 16 upcoming birthdays</span>
            </Link>
        </div>
    </div>
  )
}

export default Birthdays;