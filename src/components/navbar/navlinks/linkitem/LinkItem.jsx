"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


const LinkItem = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link key={item.title} href={item.path} className={`${pathName === item.path ? 'bg-[#EFEBFF] text-[#633CFF]' : 'text-gray-700'} rounded py-[5px] px-[10px] md:py-[9px] md:px-[17px] lg:py-[11px] lg:px-[27px] flex items-center gap-2`}>
      <span>{item.img}</span>
      <span className='hidden md:block'>{item.title}</span>
    </Link>
  );
}

export default LinkItem;
