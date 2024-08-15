import { MoreHoriz } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react'
import Button from './button/Button';

const Ad = ({size}: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4'>
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Sponsored Ads</span>
            <MoreHoriz className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
        </div>

        <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
            <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
                <Image 
                src="https://images.pexels.com/photos/26600869/pexels-photo-26600869/free-photo-of-a-whale-tail-is-seen-from-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-lg'
                sizes="100%"
                />
            </div>

            <div className='flex items-center gap-4'>
                <span className="relative rounded-full h-6 w-6">
                    <Image 
                    src="https://images.pexels.com/photos/26600869/pexels-photo-26600869/free-photo-of-a-whale-tail-is-seen-from-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="friend request image"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <div className='text-[#633CFF] font-medium'>WhiteCollar Lounge</div>
            </div>

            <p className={`${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
                {
                size === 'sm'
                ? "Lorem Ipsum sips et dolor sit amet, consectetur adipiscing"
                : size === 'md'
                ? "Lorem Ipsum dolor sit amet, consectetur adipiscing et dolor sit amet et dolor sit amet et dolor sit am"
                : "Lorem Ipsum dolor sit amet, consectetur adip iscing et dolor sit amet et dolor sit am et dolor sit am et dolor sit am et dolor sit am et dolor sit am et dolor sit am et dolor sit am et d coloring"
                }
            </p>

            <Button process={'processing...'} btnText={'Learn more'} classes={'cursor-pointer w-full p-2 rounded-md text-sm text-white hover:text-[#633CFF] bg-[#633CFF] hover:bg-[#EFEBFF]'} />

        </div>
        
    </div>
  )
}

export default Ad;