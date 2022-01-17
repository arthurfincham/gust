import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import DataThree from '../../pubComponents/DataThree.js';
import DataFour from '../../pubComponents/DataFour.js';
import dtText from '../../pubComponents/DataThree.txt';
import dfText from '../../pubComponents/DataFour.txt';

export default function DataDisplay() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<DataThree />} title="Data Display x3" myCode={dtText} />
      <Wrapper compChild={<DataFour />} title="Data Display x4" myCode={dfText} />
    </SectionWrapper>
  );
}
