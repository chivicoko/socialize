import React from 'react'
import ProfileCard from './ProfileCard';
import Link from 'next/link';
import Image from 'next/image';
import Ad from './Ad';

const LeftMenu = ({type}: {type: "home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6'>

      {type === 'home' && <ProfileCard/>}

      <div className='p-4 bg-white rounded-lg shadow-lg text-gray-500 text-sm flex flex-col gap-2'>
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/posts.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/activitya.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/market.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Marketplace</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/events.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/albums.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/videos.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/news.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/courses.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/lists.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        
        <Link href='' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <span className="relative w-6 h-6 rounded-md">
            <Image 
            src="/settings.png" 
            alt="posts icon"
            fill
            className='object-cover rounded-md'
            sizes="100%"
            />
          </span>
          <span>Settings</span>
        </Link>

      </div>

      <Ad size='sm' />
    </div>
  )
}

export default LeftMenu;