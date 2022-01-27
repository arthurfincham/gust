import DocCodeBlock from './DocCodeBlock';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import React, { useState } from 'react';
import Brackets from '../../svgs/Brackets';

import React from 'react';
export default function DummyBar({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: `${current}%`,
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [ref, bounds] = useMeasure();

  const config = {
    tension: 210,
    friction: 20,
  };
  const collapse = useSpring({
    config,
    duration: 100,
    height: isCollapsed ? 0 : bounds.height,
    opacity: isCollapsed ? 0 : 1,
  });

  const component = (
    <div className="w-2/3 h-[90px] bg-white shadow-xl rounded-xl flex items-center justify-center">
      <div className="mb-6 h-[20px] w-[90%] bg-primary-100 relative shadow-sm  my-auto rounded-xl ">
        <div
          style={progressStyle}
          className="h-[20px] rounded-l-xl bg-primary-600 absolute"
        >
          <span className="absolute top-[-30px] text-center w-[10px] text-2xl handwriting right-[-1px]">
            {current}%
          </span>
        </div>
      </div>
    </div>
  );

  const [rippleClass, setRippleClass] = useState('');
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    setRippleClass('hidden');
  };

  const code = `
import React from 'react'
export default function HorizontalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: '\${current}%',
  };

  return (
    <div className="w-2/3 h-[90px] bg-white shadow-xl rounded-xl flex items-center justify-center">
      <div className="mb-6 h-[20px] w-[90%] bg-primary-100 relative shadow-sm  my-auto rounded-xl ">
        <div style={progressStyle} className="h-[20px] rounded-l-xl bg-primary-600 absolute">
          <span className="absolute top-[-30px] text-center w-[10px] text-2xl handwriting right-[-1px]">{current}%</span>
        </div>
      </div>
    </div>
  );
} 
`;

  return (
    <div className="flex  flex-col border-[.05em] items-center w-5/6 my-6 rounded-xl shadow-sm">
      <div className="flex flex-col min-h-[50px] w-full justify-start bg-white h-full rounded-xl">
        <div className="relative z-10 flex flex-row items-center justify-between w-full px-2 pt-1 shadow-lg sm:px-4 shadow-gray-200/50">
          <h3 className="ml-1 font-sans sm:ml-0">Horizontal Progress</h3>
          <button
            onClick={() => handleClick()}
            type="button"
            className="inline-flex items-center justify-center w-[50px]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Brackets svgClass="w-full fill-black hover:fill-primary-600" />
            <div className={`${rippleClass} absolute top-[10px] right-[19px]`}>
              <span className="rippleButton"></span>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-center z-0 bg-gray-200 min-h-[100px] rounded-b-xl  componentWrappingBox py-2">
          {component}
        </div>

        <animated.div style={collapse} className="w-full rounded-xl bg-gray-50">
          <div ref={ref} className="w-full p-2 rounded-xl">
            <DocCodeBlock lang="jsx">{code}</DocCodeBlock>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
