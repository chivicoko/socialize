import Link from 'next/link';
import React from 'react'
import Button from './button/Button';
import { CalendarMonth, LinkOutlined, LocationCity, School, Work } from '@mui/icons-material';

const UserInfoCard = ({userId}: {userId: String}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4'>
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href='/' className='text-[#633CFF] text-xs'>See all</Link>
        </div>

        <div className="flex flex-col gap-4 text-gray-500">
            <div className='flex items-center gap-2'>
                <span className='text-black text-xl'>Ogoo Okoye</span>
                <span className='text-sm'>@techbaby</span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, temporibus voluptate! Adipisci quibusdam repudiandae 😊</p>
            
            <div className='flex items-center gap-2'>
                <LocationCity className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8] h-5 w-5' />
                <span>Living in <strong>Luxembourg</strong></span>
            </div>
            
            <div className='flex items-center gap-2'>
                <School className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8] h-5 w-5' />
                <span>Went to <strong>Stanfor High School</strong></span>
            </div>
            
            <div className='flex items-center gap-2 text-sm'>
                <Work className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8] h-5 w-5' />
                <span>Works at <strong>Google LLC</strong></span>
            </div>

            <div className="flex justify-between items-center flex-wrap">
                <Link href='https://www.victorokoye.com' target='_blank' className='text-[#633CFF] flex gap-1 items-center font-medium'><LinkOutlined className='h-5 w-5 transform -rotate-45' /> victorokoye.com</Link>
                <span className="text-gray-500 flex gap-1 items-center font-medium"><CalendarMonth className='h-5 w-5'/> Joined January 2024</span>
            </div>

            <Button process={'processing...'} btnText={'Follow'} classes={'cursor-pointer w-full p-2 rounded-md text-sm text-white hover:text-[#633CFF] bg-[#633CFF] hover:bg-[#EFEBFF]'} />
            <span className='text-red-600 hover:text-red-400 self-end text-xs cursor-pointer'>Block user</span>

        </div>

    </div>
  )
}

export default UserInfoCard;