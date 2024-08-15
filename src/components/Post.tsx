import { Comment, MoreHoriz, Share, ThumbUp, ThumbUpOffAltOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react'
import Comments from './Comments';

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex justify-between'>
            <div className="flex items-center gap-4">
                <span className="relative w-10 h-10 rounded-full">
                    <Image 
                    className='rounded-full object-cover'
                    src="https://images.pexels.com/photos/20780444/pexels-photo-20780444/free-photo-of-person-hand-holding-shiny-glass-mug.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="add image"
                    fill
                    sizes="100%"
                    />
                </span>
                <span className="font-medium">Emeka McIntyre</span>
            </div>
            <MoreHoriz className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
        </div>

        <div className='flex flex-col gap-4'>
            <div className="w-full relative min-h-96">
                <Image 
                className='rounded-md object-cover'
                src="https://images.pexels.com/photos/25654907/pexels-photo-25654907/free-photo-of-smiling-man-holding-ropes-over-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="add image"
                fill
                sizes="100%"
                />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequatur officia mollitia incidunt maiores perspiciatis facere necessitatibus, nulla quia distinctio quae velit est architecto omnis cumque eveniet unde atque aspernatur!</p>
        </div>

        <div className='flex items-center justify-between text-sm'>
            <div className="flex gap-2 md:gap-8">
                <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                    <ThumbUpOffAltOutlined className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                    {/* <ThumbUp className='cursor-pointer' /> */}
                    <span className='text-gray-300'> | </span>
                    <span className='text-gray-500'> 123 <span className="hidden md:inline">Likes</span> </span>
                </div>
                <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                    <Comment className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                    <span className='text-gray-300'> | </span>
                    <span className='text-gray-500'> 123 <span className="hidden md:inline">Comments</span> </span>
                </div>
            </div>

            <div>
                <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                    <Share className='cursor-pointer fill-[#633CFF] hover:fill-[#947bf8]' />
                    <span className='text-gray-300'> | </span>
                    <span className='text-gray-500'> 123 <span className="hidden md:inline">Shares</span> </span>
                </div>
            </div>
        </div>

        <Comments />
    </div>
  )
}

export default Post;