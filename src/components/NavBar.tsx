import React from 'react';
import SearchBar from './SearchBar';
import { Rocket } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className='p-4 flex flex-row items-center gap-2'>
      <Rocket className='w-8 h-8'/>
      <SearchBar />
    </nav>
  );
};

export default NavBar;