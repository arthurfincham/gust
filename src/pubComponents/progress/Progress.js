import HorizontalProgress from './HorizontalProgress';
import VerticalProgress from './VerticalProgress';
import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';

export default function Progress() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };
  return (
    <SectionWrapper>
      <HorizontalProgress {...progressProps} />
      <VerticalProgress {...progressProps} />
    </SectionWrapper>
  );
}
