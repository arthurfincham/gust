import React, { useEffect, useRef, useState } from 'react';

export default function HeaderUnderline({ text }) {
  const ref = useRef(null);

  const endPoint = Math.floor(Math.random() * 5) + 1;
  const startPoint = Math.floor(Math.random() * 5) + 1;
  const midPoint = Math.floor(Math.random() * 5) + 1;
  const pivotPoint = Math.floor(Math.random() * 5) + 1;
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    setSvgWidth(ref.current.offsetWidth - 5);
    window.addEventListener('resize', () => {
      setSvgWidth(ref.current.offsetWidth - 5);
    });
  }, []);

  return (
    <>
      <div className="relative float-left text-center ">
        <h1 className="mb-1 text-4xl text-black dark:text-white lg:text-6xl scroll-mt-24" id={text.toLowerCase()} ref={ref}>
          {text}
        </h1>

        <svg
          className="mt-[-10px] absolute stroke-black dark:stroke-white "
          left="0"
          right="0"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <span className="sr-only">Underline</span>
          <path
            id="pathItem"
            d={`M5 ${startPoint} Q ${svgWidth / pivotPoint} ${midPoint} ${svgWidth} ${endPoint}`}
            fill="transparent"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
