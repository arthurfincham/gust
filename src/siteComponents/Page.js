import React, { useState, useEffect } from 'react';
import SubNav from './SubNav';
import SideNav from './SideNav';
import { useSpring, animated } from 'react-spring';

export default function Page({ items }) {
  const [subNavClosed, setSubNavClosed] = useState(true);
  const [liveItem, setLiveItem] = useState(items[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const renderComp = () => {
    return liveItem.comp;
  };

  const updateLiveItem = (input) => {
    const live = items.find((x) => x.id == input);
    setLiveItem(live);
  };

  const mainCollapse = useSpring({
    duration: 100,
    transform: !subNavClosed && windowWidth <= 768 ? 'translateX(150px)' : 'translateX(0px)',
  });

  return (
    <div className="h-full sm:overflow-y-scroll md:overflow-auto componentsWrapper">
      <SubNav subNavClosed={subNavClosed} toggleSubNav={() => setSubNavClosed(!subNavClosed)} liveItem={liveItem} />
      <div className="flex w-full h-full md:mt-[50px]">
        <SideNav
          liveItem={liveItem}
          updateLiveItem={updateLiveItem}
          items={items}
          subNavClosed={subNavClosed}
          windowWidth={windowWidth}
        />
        <animated.div style={mainCollapse} className="flex flex-col md:ml-[150px] items-center w-full ">
          {renderComp()}
        </animated.div>
      </div>
    </div>
  );
}
