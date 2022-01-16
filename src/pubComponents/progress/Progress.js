import HorizontalProgress from './HorizontalProgress';
import VerticalProgress from './VerticalProgress';
import { HoriProg, VertProg } from '../CodeFile';
import Wrapper from '../../siteComponents/Wrapper';
import SectionWrapper from '../../siteComponents/SectionWrapper';

export default function Progress() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };
  return (
    <SectionWrapper>
      <Wrapper compChild={<HorizontalProgress {...progressProps} />} title="Horizontal Progress" myCode={HoriProg} />
      <Wrapper compChild={<VerticalProgress {...progressProps} />} title="Vertical Progress" myCode={VertProg} />
    </SectionWrapper>
  );
}
