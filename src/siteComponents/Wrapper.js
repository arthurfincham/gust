import { CodeBlock } from 'react-code-blocks';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import React, { useState } from 'react';
import Brackets from '../svgs/Brackets';

export default function Wrapper({ compChild, title, myCode }) {
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

  const wrapperStyles = {
    borderBottom: isCollapsed ? 0 : 1,
  };

  return (
    <>
      <div style={wrapperStyles} className="flex flex-col min-h-[100px] w-1/2 justify-start bg-white mt-6  border-[.05em] shadow-md">
        <div className="flex items-center justify-between w-full px-6 bg-red-100">
          <h3 className="roboto-light">{title}</h3>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
            className="inline-flex items-center justify-center w-[50px] p-1 rounded-md hover:bg-gray-100"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Brackets svgClass="hover:bg-gray-100" />
          </button>
        </div>
        <div className="flex items-center justify-center  min-h-[100px]  ">{compChild}</div>
      </div>

      <animated.div style={collapse} className="w-1/2  m-2 mt-0 bg-gray-50 border-[0.05em] border-t-0 shadow-md">
        <div ref={ref} className="w-full p-2">
          <CodeBlock text={myCode} language="jsx" wrapLines />
        </div>
      </animated.div>
    </>
  );
}
