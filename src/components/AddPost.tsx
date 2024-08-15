import Image from 'next/image';
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-lg rounded-lg flex gap-4 justify-between text-sm'>
        <span className="relative w-12 h-12 rounded-full">
            <Image 
            src="https://images.pexels.com/photos/19936041/pexels-photo-19936041/free-photo-of-woman-standing-behind-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="add story"
            className='rounded-full'
            fill
            style={{ objectFit: 'cover' }}
            sizes="100%"
            />
        </span>
        <div className='flex-1 w-full'>
            <div className='flex gap-4'>
                <textarea name="" id="" placeholder="What's on your mind?" className='bg-slate-100 flex-1 p-2 rounded-lg'></textarea>
                <span className="relative w-5 h-5 cursor-pointer self-end">
                    <Image 
                    src="/emoji.png" 
                    alt="add emoji"
                    className='rounded-full object-cover'
                    fill
                    sizes="100%"
                    />
                </span>
            </div>
            <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="relative w-5 h-5">
                        <Image 
                        src="/addimage.png" 
                        alt="add image"
                        fill
                        className='object-cover'
                        sizes="100%"
                        />
                    </span>
                    Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="relative w-5 h-5">
                        <Image 
                        src="/addVideo.png" 
                        alt="add video"
                        fill
                        className='object-cover'
                        sizes="100%"
                        />
                    </span>
                    Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="relative w-5 h-5">
                        <Image 
                        src="/poll.png" 
                        alt="add poll"
                        fill
                        className='object-cover'
                        sizes="100%"
                        />
                    </span>
                    Poll
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="relative w-5 h-5">
                        <Image 
                        src="/addevent.png" 
                        alt="add event"
                        fill
                        className='object-cover'
                        sizes="100%"
                        />
                    </span>
                    Event
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost;