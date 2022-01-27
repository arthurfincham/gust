import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import GentleWaves from './GentleWaves';
import gwText from './GentleWaves.txt';
import HeavyWaves from './HeavyWaves';
import hwText from './HeavyWaves.txt';

import React from 'react';
export default function Waves() {
  const waveChildren = (
    <>
      <h1 className="text-5xl text-white font-sans-bb">Title</h1>
      <p className="text-xl text-center text-white font-sans-b">
        A wave divider is a nice transition between sections or divs.
      </p>
    </>
  );
  return (
    <SectionWrapper>
      <Wrapper
        compChild={<GentleWaves>{waveChildren}</GentleWaves>}
        title="Gentle Waves"
        myCode={gwText}
      />
      <Wrapper
        compChild={<HeavyWaves>{waveChildren}</HeavyWaves>}
        title="Heavy Waves"
        myCode={hwText}
      />
    </SectionWrapper>
  );
}
