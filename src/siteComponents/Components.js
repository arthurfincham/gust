import Progress from '../pubComponents/progress/Progress';
import Cards from '../pubComponents/cards/Cards';
import Buttons from '../pubComponents/buttons/Buttons';
import AllComponents from '../pubComponents/AllComponents';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SubNav from './SubNav';
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

  const listStyle = (type) => {
    if (type.id === liveComp.id) {
      return {
        color: '#5046E5',
      };
    }
  };

  return (
    <div className="h-full overflow-y-scroll md:overflow-auto componentsWrapper">
      <SubNav isClosed={isClosed} setIsClosed={setIsClosed} liveComp={liveComp} />
      <div className="flex w-full h-full md:mt-[50px]">
        <animated.ul style={collapse} className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap">
          {compTypes.map((type) => {
            return (
              <li key={type.id} style={listStyle(type)} className="w-full px-3 py-1 cursor-pointer text-md" onClick={() => setLiveComp(type)}>
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
