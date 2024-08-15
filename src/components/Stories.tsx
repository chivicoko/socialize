import { AddOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-scroll scrollbar-hidden text-sm p-4'>
        <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="addStoryBtn flex justify-center items-center h-16 w-16 rounded-full bg-[url('https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center">
                    <AddOutlined className='w-16 h-16 rounded-full fill-white'/>
                </div>
                <span className='font-medium'>Add story</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <span className="relative w-16 h-16 rounded-full ring-2">
                    <Image 
                    src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add story"
                    className='rounded-full'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                    />
                </span>
                <span className='font-medium'>Emphalizt</span>
            </div>

        </div>
    </div>
  )
}

export default Stories