import React from 'react';
import LinkItem from './linkitem/LinkItem';
import { navlinks } from '@/lib/data';
import SearchBar from './SearchBar';

const NavLinks = () => {
  return (
    <div className='hidden md:flex items-center justify-between gap-5 lg:gap-10 text-gray-900'>
      {navlinks.map((link) => (
        <LinkItem item={link} key={link.title} />
      ))}
      <SearchBar />
    </div>
  );
};

export default NavLinks;
