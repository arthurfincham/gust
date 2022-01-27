import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import DataThree from './DataThree.js';
import DataFour from './DataFour.js';
import DataIncrease from './DataIncrease.js';
import diText from './DataIncrease.txt';
import dtText from './DataThree.txt';
import dfText from './DataFour.txt';

export default function DataDisplay() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<DataThree />} title="Data Display x3" myCode={dtText} />
      <Wrapper compChild={<DataFour />} title="Data Display x4" myCode={dfText} />
      <Wrapper compChild={<DataIncrease />} title="Data Increase" myCode={diText} />
    </SectionWrapper>
  );
}
