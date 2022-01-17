import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import HeaderUnderline from '../../pubComponents/HeaderUnderline';
import huText from '../../pubComponents/HeaderUnderline.txt';
export default function Text() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<HeaderUnderline text="Header" />} title="Header Underline" myCode={huText} />
    </SectionWrapper>
  );
}
