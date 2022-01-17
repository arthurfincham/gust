import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import BasicCard from '../../pubComponents/BasicCard';
import bcText from '../../pubComponents/BasicCard.txt';

export default function Cards() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<BasicCard />} title="Basic Card" myCode={bcText} />
    </SectionWrapper>
  );
}
