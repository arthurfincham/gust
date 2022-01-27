import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import ArrowList from './ArrowList';
import HandList from './HandList';
import alText from './ArrowList.txt';
import hlText from './HandList.txt';

import React from 'react';
export default function Lists() {
  const listData = [
    'A list item',
    'Another list item',
    'A third list item',
    'A fourth list item',
    'And a fifth list item',
  ];
  return (
    <SectionWrapper>
      <Wrapper
        compChild={<ArrowList listData={listData} />}
        title="Arrow List"
        myCode={alText}
      />
      <Wrapper
        compChild={<HandList listData={listData} />}
        title="Handwritten List"
        myCode={hlText}
      />
    </SectionWrapper>
  );
}
