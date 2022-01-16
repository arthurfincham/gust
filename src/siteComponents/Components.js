import Progress from '../pubComponents/progress/Progress';
import Cards from '../pubComponents/cards/Cards';
import Buttons from '../pubComponents/buttons/Buttons';
import AllComponents from '../pubComponents/AllComponents';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Components({ isClosed, windowWidth }) {
  const compTypes = [
    { id: 1, name: 'All Components', comp: <AllComponents /> },
    { id: 2, name: 'Progress', comp: <Progress /> },
    { id: 3, name: 'Cards', comp: <Cards /> },
    { id: 4, name: 'Buttons', comp: <Buttons /> },
  ];

  const [liveComp, setLiveComp] = useState(<AllComponents />);

  const renderComp = () => {
    return liveComp;
  };

  const collapse = useSpring({
    duration: 100,
    transform: isClosed && windowWidth <= 768 ? 'translateX(-150px)' : 'translateX(0px)',
  });

  const mainCollapse = useSpring({
    duration: 100,
    transform: !isClosed && windowWidth <= 768 ? 'translateX(150px)' : 'translateX(0px)',
  });

  return (
    <div className="flex h-full">
      <animated.ul style={collapse} className="flex flex-col  w-[150px] fixed h-full mt-[60px] pl-4 lg:pl-0 whitespace-nowrap">
        {compTypes.map((type) => {
          return (
            <li key={type.id} className="w-full px-3 py-1 cursor-pointer text-md" onClick={() => setLiveComp(type.comp)}>
              {type.name}
            </li>
          );
        })}
      </animated.ul>
      <animated.div style={mainCollapse} className="flex flex-col mt-[50px] md:ml-[150px] items-center w-full">
        {renderComp()}
      </animated.div>
    </div>
  );
}
