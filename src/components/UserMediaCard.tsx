import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UserMediaCard = ({userId}: {userId: String}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4'>
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Media</span>
            <Link href='/' className='text-[#633CFF] text-xs'>See all</Link>
        </div>

        <div className='flex items-center gap-3 flex-wrap'>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/18111094/pexels-photo-18111094/free-photo-of-city-and-river-with-boat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/26977125/pexels-photo-26977125/free-photo-of-modern-skyscrapers-in-vancouver-canada.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/27597883/pexels-photo-27597883/free-photo-of-low-angle-shot-of-the-sky-tower-in-auckland-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/27555583/pexels-photo-27555583/free-photo-of-a-woman-in-a-dress-with-a-red-necklace.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/27573933/pexels-photo-27573933/free-photo-of-a-woman-standing-on-a-wooden-walkway-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
            <span className="relative w-1/5 h-24 rounded-md">
                <Image 
                src="https://images.pexels.com/photos/27255535/pexels-photo-27255535/free-photo-of-woman-in-white-dress-standing-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="friend request image"
                fill
                className='object-cover rounded-md'
                sizes="100%"
                />
            </span>
        </div>

    </div>
  )
}

export default UserMediaCard;