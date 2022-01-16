import { CodeBlock, atomOneLight } from 'react-code-blocks';
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

  return (
    <div className="flex  flex-col border-[.05em] items-center w-5/6 my-6 rounded-xl shadow-sm">
      <div className="flex flex-col min-h-[100px] w-full justify-start bg-white h-full rounded-xl">
        <div className="z-10 flex flex-row items-center justify-between w-full px-2 pt-1 shadow-lg sm:px-4 shadow-gray-200/50">
          <h3 className="ml-1 sm:ml-0 roboto-regular">{title}</h3>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
            className="inline-flex items-center justify-center w-[50px]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Brackets svgClass="w-full fill-black hover:fill-indigo-600" />
          </button>
        </div>

        <div className="flex items-center justify-center z-0 bg-gray-50 min-h-[200px] rounded-b-xl py-2">{compChild}</div>

        <animated.div style={collapse} className="w-full rounded-xl bg-gray-50">
          <div ref={ref} className="w-full p-2 rounded-xl">
            <CodeBlock showLineNumbers={false} text={myCode} theme={atomOneLight} language="jsx" wrapLines />
          </div>
        </animated.div>
      </div>
    </div>
  );
}
