import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import React, { useState } from 'react';
import Brackets from '../svgs/Brackets';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gustCodeTheme } from './gustCodeTheme';

export default function Wrapper({ compChild, title, myCode, renderButton = false }) {
  const [code, setCode] = useState('');

  fetch(myCode)
    .then((r) => r.text())
    .then((text) => {
      setCode(text);
    });

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

  const codeBlockStyle = {
    padding: '1em',
  };

  const compWrapperStyle = () => {
    return isCollapsed ? { borderRadius: '0 0 10px 10px' } : { borderRadius: '0 0 0 0' };
  };

  return (
    <div className="flex  flex-col border-[.05em] items-center w-5/6 my-6 rounded-xl shadow-sm">
      <div className="flex flex-col min-h-[100px] w-full justify-start bg-white h-full rounded-xl">
        <div className="z-10 flex flex-row items-center justify-between w-full px-2 pt-1 shadow-lg sm:px-4 shadow-gray-200/50">
          <h3 className="ml-1 font-sans sm:ml-0">{title}</h3>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
            className="inline-flex items-center justify-center w-[50px]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Brackets svgClass="w-full fill-black hover:fill-primary-600" />
          </button>
        </div>

        <div
          style={compWrapperStyle()}
          className="flex items-center justify-center z-0 bg-gray-200 min-h-[200px]  p-4 overflow-hidden componentWrappingBox"
        >
          {compChild}
        </div>

        <animated.div style={collapse} className="w-full bg-gray-200 rounded-b-xl">
          <div ref={ref} className="w-full rounded-b-xl">
            <SyntaxHighlighter customStyle={codeBlockStyle} language="jsx" style={gustCodeTheme}>
              {code}
            </SyntaxHighlighter>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
