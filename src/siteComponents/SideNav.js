import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function SideNav({ liveItem, updateLiveItem, items, subNavClosed, windowWidth }) {
  const collapse = useSpring({
    duration: 100,
    transform: subNavClosed && windowWidth <= 768 ? 'translateX(-150px)' : 'translateX(0px)',
  });

  const listStyle = (type) => {
    if (type.id === liveItem.id) {
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
      {items.map((type) => {
        return (
          <li
            key={type.id}
            style={listStyle(type)}
            className="w-full px-3 py-1 cursor-pointer font-sans-b text-md"
            onClick={() => updateLiveItem(type.id)}
            data-testid={type.name.replace(/\s/g, '')}
          >
            {type.name}
          </li>
        );
      })}
    </animated.ul>
  );
}
