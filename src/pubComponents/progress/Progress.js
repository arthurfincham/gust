import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import HorizontalProgress from './HorizontalProgress';
import VerticalProgress from './VerticalProgress';
import CircularProgress from './CircularProgress';
import hText from './HorizontalProgress.txt';
import vText from './VerticalProgress.txt';
import circText from './CircularProgress.txt';

export default function Progress() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };

  return (
    <SectionWrapper>
      <Wrapper compChild={<HorizontalProgress {...progressProps} />} title="Horizontal Progress" myCode={hText} />
      <Wrapper compChild={<VerticalProgress {...progressProps} />} title="Vertical Progress" myCode={vText} />
      <Wrapper compChild={<CircularProgress {...progressProps} />} title="Circular Progress" myCode={circText} />
    </SectionWrapper>
  );
}
