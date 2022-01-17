import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import VerticalTimeline from '../../pubComponents/VerticalTimeline';
import vtText from '../../pubComponents/VerticalTimeline.txt';

export default function Timeline() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<VerticalTimeline />} title="Vertical Timeline" myCode={vtText} />
    </SectionWrapper>
  );
}
