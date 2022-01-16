import Progress from '../pubComponents/progress/Progress';
import Cards from '../pubComponents/cards/Cards';
import Buttons from '../pubComponents/buttons/Buttons';
import AllComponents from '../pubComponents/AllComponents';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '../svgs/MenuIcon';
import CloseIcon from '../svgs/CloseIcon';
export default function Components({ isClosed, windowWidth, setIsClosed }) {
  const compTypes = [
    { id: 1, name: 'All Components', comp: <AllComponents /> },
    { id: 2, name: 'Progress', comp: <Progress /> },
    { id: 3, name: 'Cards', comp: <Cards /> },
    { id: 4, name: 'Buttons', comp: <Buttons /> },
  ];

  const [liveComp, setLiveComp] = useState({ id: 1, name: 'All Components', comp: <AllComponents /> });

  const renderComp = () => {
    return liveComp.comp;
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
    <>
      <div className="flex w-full mt-[50px] h-[40px] px-4 shadow-md justify-center  items-center border-t-[0.1em]">
        <button onClick={() => setIsClosed(!isClosed)} className="absolute italic text-left left-3">
          {isClosed ? <MenuIcon /> : <CloseIcon svgClass="pl-1" />}
        </button>
        <span className="roboto-bold">{liveComp.name}</span>
      </div>
      <div className="flex w-full h-full">
        <animated.ul style={collapse} className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap">
          {compTypes.map((type) => {
            return (
              <li key={type.id} className="w-full px-3 py-1 cursor-pointer text-md" onClick={() => setLiveComp(type)}>
                {type.name}
              </li>
            );
          })}
        </animated.ul>

        <animated.div style={mainCollapse} className="flex flex-col md:ml-[150px] items-center w-full ">
          {renderComp()}
        </animated.div>
      </div>
    </>
  );
}
