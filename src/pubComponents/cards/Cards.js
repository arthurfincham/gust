import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import TabCard from './TabCard';
import tcText from './TabCard.txt';

import React from 'react';
export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<TabCard />} title="Tab Card" myCode={tcText} />
    </SectionWrapper>
  );
}
