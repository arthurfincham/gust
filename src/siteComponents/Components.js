import Progress from './sections/Progress';
import Buttons from './sections/Buttons';
import DataDisplay from './sections/DataDisplay';
import AllComponents from './sections/AllComponents';
import Timeline from './sections/Timeline';
import Text from './sections/Text';
import Lists from './sections/Lists';
import Forms from './sections/Forms';
import Waves from './sections/Waves';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SubNav from './SubNav';

export default function Components({ isClosed, windowWidth, setIsClosed }) {
  const compTypes = [
    { id: 1, name: 'All Components', comp: <AllComponents /> },
    { id: 2, name: 'Buttons', comp: <Buttons /> },
    { id: 3, name: 'Data Display', comp: <DataDisplay /> },
    { id: 4, name: 'Forms', comp: <Forms /> },
    { id: 5, name: 'Lists', comp: <Lists /> },
    { id: 6, name: 'Progress', comp: <Progress /> },
    { id: 7, name: 'Text', comp: <Text /> },
    { id: 8, name: 'Timeline', comp: <Timeline /> },
    { id: 9, name: 'Waves', comp: <Waves /> },
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
    <div className="h-full sm:overflow-y-scroll md:overflow-auto componentsWrapper">
      <SubNav isClosed={isClosed} setIsClosed={setIsClosed} liveComp={liveComp} />
      <div className="flex w-full h-full md:mt-[50px]">
        <animated.ul style={collapse} className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap">
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
