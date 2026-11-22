import type { ReactNode } from 'react';
import { cn } from '../utils/cn';
import FavLink from '../components/FavLink';
import FavLinks from '../sections/FavLinks';

type LayoutLoggedProps = {
  children: ReactNode;
};

const LayoutLogged = ({ children }: LayoutLoggedProps) => {
  const backgroundStyle = ' bg-[#94c9eb] bg-linear-[137deg,rgba(148,201,235,1)_0%,rgba(39,36,255,1)_100%]'

  const LINKS = [
    {
      url: "https://www.facebook.com/",
      text: "Facebook"
    },
    {
      url: "https://www.facebook.com/",
      text: "Facebook"
    },
    {
      url: "https://www.facebook.com/",
      text: "Facebook"
    },
  ]

  return (
    <div className={cn(
      'flex flex-col flex-1 overflow-y-auto',
      backgroundStyle
    )}>
      {children}
      <FavLinks links={LINKS}/>
    </div>
  );
};

export default LayoutLogged;