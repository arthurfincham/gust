import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import DocsMobileNav from './docComponents/DocsMobileNav';
import DocsMainNav from './docComponents/DocsMainNav';
import GettingStarted from './GettingStarted';
import UsingComponents from './UsingComponents';

export default function Documentation({ subNavClosed, windowWidth, toggleSubNav }) {
  const docSections = [
    {
      id: 1,
      name: 'Getting Started',
      doc: <GettingStarted />,
    },
    {
      id: 2,
      name: 'Components',
      doc: <UsingComponents />,
    },
  ];

  const [liveDoc, setLiveDoc] = useState(docSections[0]);

  const updateLiveDoc = (input) => {
    const doc = docSections.find((item) => item.id === input);
    setLiveDoc(doc);
  };

  const renderComp = () => {
    return liveDoc.doc;
  };

  const mainCollapse = useSpring({
    duration: 100,
    transform: !subNavClosed && windowWidth <= 768 ? 'translateX(150px)' : 'translateX(0px)',
  });

  return (
    <div className="h-full sm:overflow-y-scroll md:overflow-auto componentsWrapper scroll-smooth">
      <DocsMobileNav subNavClosed={subNavClosed} toggleSubNav={toggleSubNav} liveDoc={liveDoc} />
      <div className="flex w-full h-full mt-[20px] md:mt-[50px]">
        <DocsMainNav
          liveDoc={liveDoc}
          subNavClosed={subNavClosed}
          windowWidth={windowWidth}
          updateLiveDoc={(input) => updateLiveDoc(input)}
        />
        <animated.div style={mainCollapse} className="flex flex-col md:ml-[150px] items-center w-full ">
          <div className="md:mt-[20px] w-2/3">{renderComp()}</div>
        </animated.div>
      </div>
    </div>
  );
}
