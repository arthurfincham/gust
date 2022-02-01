import React from 'react';
import { compTypes } from '../pubComponents/compTypesExporter';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SubNav from '../siteComponents/SubNav';

export default function Components({ subNavClosed, windowWidth, toggleSubNav }) {
  const [liveComp, setLiveComp] = useState(compTypes[0]);

  const renderComp = () => {
    return liveComp.comp;
  };

  const collapse = useSpring({
    duration: 100,
    transform: subNavClosed && windowWidth <= 768 ? 'translateX(-150px)' : 'translateX(0px)',
  });

  const mainCollapse = useSpring({
    duration: 100,
    transform: !subNavClosed && windowWidth <= 768 ? 'translateX(150px)' : 'translateX(0px)',
  });

  const listStyle = (type) => {
    if (type.id === liveComp.id) {
      return {
        color: '#5046E5',
      };
    }
  };

  return (
    <div className="h-full sm:overflow-y-scroll md:overflow-auto componentsWrapper">
      <SubNav subNavClosed={subNavClosed} toggleSubNav={toggleSubNav} liveComp={liveComp} />
      <div className="flex w-full h-full md:mt-[50px]">
        <animated.ul
          style={collapse}
          className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap"
        >
          {compTypes.map((type) => {
            return (
              <li
                key={type.id}
                style={listStyle(type)}
                className="w-full px-3 py-1 cursor-pointer font-sans-b text-md"
                onClick={() => setLiveComp(type)}
                data-testid={type.name.replace(/\s/g, '')}
              >
                {type.name}
              </li>
            );
          })}
        </animated.ul>

        <animated.div style={mainCollapse} className="flex flex-col md:ml-[150px] items-center w-full ">
          {renderComp()}
        </animated.div>
      </div>
    </div>
  );
}
