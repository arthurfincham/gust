import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import DataThree from '../../pubComponents/DataThree';
import DataFour from '../../pubComponents/DataFour';
import dtText from '../../pubComponents/DataThree.txt';
import dfText from '../../pubComponents/DataFour.txt';

export default function DataDisplay() {
  return (
    <SectionWrapper>
      <Wrapper childComp={<DataThree />} title="Data Display x3" myCode={dtText} />
      <Wrapper childComp={<DataFour />} title="Data Display x4" myCode={dfText} />
    </SectionWrapper>
  );
}
