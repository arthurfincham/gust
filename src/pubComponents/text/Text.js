import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import HeaderUnderline from './HeaderUnderline';
import huText from './HeaderUnderline.txt';
export default function Text() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<HeaderUnderline text="Header" />} title="Header Underline" myCode={huText} renderButton={true} />
    </SectionWrapper>
  );
}
