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

  const boxStyles = {
    borderBottom: isCollapsed ? '.05em solid #E4E6EB' : 0,
  };

  return (
    <div className="flex flex-col items-center w-5/6 md:w-11/12 lg:flex-row lg:my-4">
      <div
        style={boxStyles}
        className="flex flex-col min-h-[100px] w-full lg:w-1/3 justify-start bg-white mt-6  lg:mt-0 border-[.05em] relative lg:justify-center lg:h-full py-2 lg:py-0"
      >
        <h3 className="absolute roboto-light top-2 left-3">{title}</h3>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          type="button"
          className="lg:hidden inline-flex items-center absolute justify-center w-[50px]  rounded-md hover:bg-gray-100 top-2 right-2 p-1"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <Brackets svgClass="hover:bg-gray-100" />
        </button>

        <div className="flex items-center justify-center  min-h-[100px]  ">{compChild}</div>
      </div>

      <animated.div style={collapse} className="w-full lg:hidden mt-0 bg-gray-50 border-[0.05em] border-t-0 ">
        <div ref={ref} className="w-full p-2">
          <CodeBlock showLineNumbers={false} text={myCode} language="jsx" wrapLines />
        </div>
      </animated.div>
      <div className="w-2/3 lg:block hidden mt-0 bg-gray-50 border-[0.05em] border-t-0 lg:border-t-[0.05em] lg:border-l-0">
        <div className="w-full p-2">
          <CodeBlock showLineNumbers={false} text={myCode} language="jsx" wrapLines />
        </div>
      </div>
    </div>
  );
}
