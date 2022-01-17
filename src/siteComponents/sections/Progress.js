import HorizontalProgress from '../../pubComponents/HorizontalProgress';
import VerticalProgress from '../../pubComponents/VerticalProgress';
import CircularProgress from '../../pubComponents/CircularProgress';
import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import hText from '../../pubComponents/HorizontalProgress.txt';
import vText from '../../pubComponents/VerticalProgress.txt';
import circText from '../../pubComponents/CircularProgress.txt';

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
