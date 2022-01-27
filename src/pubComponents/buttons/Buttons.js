import React from 'react';
import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import BasicButton from './BasicButton';
import bbText from './BasicButton.txt';
import OutlinedButton from './OutlinedButton';
import obText from './OutlinedButton.txt';
import IconButton from './IconButton';
import ibText from './IconButton.txt';
import OutlinedIconButton from './OutlinedIconButton';
import oibText from './OutlinedIconButton.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper
        compChild={<BasicButton />}
        title="Basic Button"
        myCode={bbText}
      />
      <Wrapper
        compChild={<OutlinedButton />}
        title="Outlined Button"
        myCode={obText}
      />
      <Wrapper compChild={<IconButton />} title="Icon Button" myCode={ibText} />
      <Wrapper
        compChild={<OutlinedIconButton />}
        title="Outlined Icon Button"
        myCode={oibText}
      />
    </SectionWrapper>
  );
}
