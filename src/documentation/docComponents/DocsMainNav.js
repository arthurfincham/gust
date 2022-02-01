import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function DocsMainNav({ liveDoc, subNavClosed, windowWidth, updateLiveDoc }) {
  const collapse = useSpring({
    duration: 100,
    transform: subNavClosed && windowWidth <= 768 ? 'translateX(-150px)' : 'translateX(0px)',
  });

  const listStyle = (input) => {
    if (input === liveDoc.id) {
      return {
        color: '#5046E5',
      };
    }
  };
  return (
    <animated.ul
      style={collapse}
      className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap"
    >
      <li
        style={listStyle(1)}
        className="w-full px-3 py-1 cursor-pointer font-sans-b text-md"
        onClick={() => updateLiveDoc(1)}
      >
        Getting Started
      </li>
      <a className="w-full px-3 py-1 ml-4 cursor-pointer font-sans-b text-md" href="#setUpTailwind">
        Set Up Tailwind
      </a>
      <a className="w-full px-3 py-1 ml-4 cursor-pointer font-sans-b text-md" href="#customColors">
        Colors
      </a>
      <a className="w-full px-3 py-1 ml-4 cursor-pointer font-sans-b text-md" href="#customFonts">
        Fonts
      </a>
      <li
        style={listStyle(2)}
        className="w-full px-3 py-1 cursor-pointer font-sans-b text-md"
        onClick={() => updateLiveDoc(2)}
      >
        Components
      </li>
    </animated.ul>
  );
}
