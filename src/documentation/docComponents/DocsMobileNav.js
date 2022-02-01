import MenuIcon from '../../svgs/MenuIcon';
import CloseIcon from '../../svgs/CloseIcon';

import React from 'react';
export default function DocsMobileNav({ toggleSubNav, subNavClosed, liveDoc }) {
  return (
    <div className="md:hidden flex w-full mt-[50px] h-[40px] px-4 shadow-md justify-center  items-center relative  border-t-[0.1em]">
      <button onClick={() => toggleSubNav()} className="absolute italic text-left left-3">
        {subNavClosed ? <MenuIcon /> : <CloseIcon svgClass="pl-1" />}
      </button>
      <span className="font-sans-b">{liveDoc.name}</span>
    </div>
  );
}
