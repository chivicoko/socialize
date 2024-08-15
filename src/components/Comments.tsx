import { MoreHoriz, ThumbUp, ThumbUpOffAltOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react'

const Comments = () => {
  return (
    <div>
        <div className="flex items-center gap-3">
            <span className="relative w-8 h-8 rounded-full">
                <Image 
                src="https://images.pexels.com/photos/18964530/pexels-photo-18964530/free-photo-of-table-and-two-chairs-standing-on-a-balcony-in-saigon-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="add comment"
                fill
                className='object-cover rounded-full'
                sizes="100%"
                />
            </span>
            <div className='flex-1 flex justify-between items-center gap-4 bg-slate-100 rounded-xl text-sm px-4 py-2 w-full'>
                <input type="text" className="bg-transparent outline-none flex-1" placeholder='Write a comment...' />
                <span className="relative w-5 h-5 cursor-pointer">
                    <Image 
                    src="/emoji.png" 
                    alt="add emoji"
                    className='rounded-full object-cover'
                    fill
                    sizes="100%"
                    />
                </span>
            </div>
        </div>

        <div>
            <div className='flex justify-between gap-4 mt-6'>
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    src="https://images.pexels.com/photos/18964530/pexels-photo-18964530/free-photo-of-table-and-two-chairs-standing-on-a-balcony-in-saigon-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add comment"
                    fill
                    className='object-cover rounded-full'
                    sizes="100%"
                    />
                </span>
                <div className='flex-1 flex flex-col gap-2'>
                    <span className="font-medium">Chibuzo Victor</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente suscipit ad laudantium illo eos quam, dignissimos, dolore quo porro facilis deleniti facere fugiat dicta asperiores molestias commodi. Doloremque, praesentium.</p>
                    <div className="flex items-center gap-8 text-sm text-gray-500">
                        <div className='flex items-center gap-4'>
                            <ThumbUpOffAltOutlined className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                            {/* <ThumbUp className='cursor-pointer' /> */}
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'> 123 <span className="hidden md:inline">Likes</span> </span>
                        </div>
                        <div className='cursor-pointer'>Reply</div>
                    </div>
                </div>
                <MoreHoriz className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
            </div>
        </div>
    </div>
  )
}

export default Comments;