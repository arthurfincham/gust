import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import DocNav from './DocNav';
import GettingStarted from './documentation/GettingStarted';
import InstallTailwind from './documentation/InstallTailwind';
import CustomFonts from './documentation/CustomFonts';
import CustomColors from './documentation/CustomColors';
import UsingComponents from './documentation/UsingComponents';
export default function Documentation({ isClosed, windowWidth, setIsClosed }) {
  const gettingStarted = { id: 1, name: 'Getting Started', doc: <GettingStarted /> };
  const usingComponents = { id: 5, name: 'Components', doc: <UsingComponents /> };

  const [liveDoc, setLiveDoc] = useState({ id: 1, name: 'Getting Started', doc: <GettingStarted /> });

  const renderComp = () => {
    return liveDoc.doc;
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
    if (type.id === liveDoc.id) {
      return {
        color: '#5046E5',
      };
    }
  };

  return (
    <div className="h-full sm:overflow-y-scroll md:overflow-auto componentsWrapper scroll-smooth">
      <DocNav isClosed={isClosed} setIsClosed={setIsClosed} liveDoc={liveDoc} />
      <div className="flex w-full h-full mt-[20px] md:mt-[50px]">
        <animated.ul style={collapse} className="flex flex-col  w-[150px] fixed h-full mt-[20px] pl-4 lg:pl-0 whitespace-nowrap">
          <li
            style={listStyle(gettingStarted)}
            className="w-full px-3 py-1 cursor-pointer roboto-bold text-md"
            onClick={() => setLiveDoc(gettingStarted)}
          >
            Getting Started
          </li>
          <a className="w-full px-3 py-1 ml-4 cursor-pointer roboto-bold text-md" href="#setUpTailwind">
            Set Up Tailwind
          </a>
          <a className="w-full px-3 py-1 ml-4 cursor-pointer roboto-bold text-md" href="#customColors">
            Colors
          </a>
          <a className="w-full px-3 py-1 ml-4 cursor-pointer roboto-bold text-md" href="#customFonts">
            Fonts
          </a>
          <li
            style={listStyle(usingComponents)}
            className="w-full px-3 py-1 cursor-pointer roboto-bold text-md"
            onClick={() => setLiveDoc(usingComponents)}
          >
            Components
          </li>
        </animated.ul>

        <animated.div style={mainCollapse} className="flex flex-col md:ml-[150px] items-center w-full ">
          <div className="md:mt-[20px] w-2/3">{renderComp()}</div>
        </animated.div>
      </div>
    </div>
  );
}
