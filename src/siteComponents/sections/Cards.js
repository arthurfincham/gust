import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import TabCard from '../../pubComponents/TabCard';
import tcText from '../../pubComponents/TabCard.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<TabCard />} title="Tab Card" myCode={tcText} />
    </SectionWrapper>
  );
}
