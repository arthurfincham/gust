import Progress from '../pubComponents/Progress';
import Cards from '../pubComponents/Cards';
import { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

export default function Components({ isClosed, windowWidth }) {
  const progress = <Progress />;

  const [liveComp, setLiveComp] = useState(progress);

  const cards = <Cards />;

  const renderComp = () => {
    return liveComp;
  };

  const collapse = useSpring({
    duration: 100,
    transform: isClosed && windowWidth <= 640 ? 'translateX(-150px)' : 'translateX(0px)',
  });

  const mainCollapse = useSpring({
    duration: 100,
    transform: !isClosed && windowWidth <= 640 ? 'translateX(150px)' : 'translateX(0px)',
  });

  return (
    <div className="flex h-full">
      <animated.ul style={collapse} className="flex flex-col border-r-[0.05em] border-collapse w-[150px] fixed h-full mt-[50px]">
        <li className="w-full px-3 py-2 border-b-[0.05em] border-collapse cursor-pointer" onClick={() => setLiveComp(progress)}>
          Progress
        </li>
        <li className="w-full px-3 py-2 border-b-[0.05em] border-collapse cursor-pointer" onClick={() => setLiveComp(cards)}>
          Cards
        </li>
      </animated.ul>
      <animated.div style={mainCollapse} className="flex bg-green-100 flex-col mt-[50px] md:ml-[150px] items-center w-full">
        {renderComp()}
      </animated.div>
    </div>
  );
}
