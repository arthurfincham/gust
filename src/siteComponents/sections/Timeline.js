import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import VerticalTimeline from '../../pubComponents/VerticalTimeline';
import vtText from '../../pubComponents/VerticalTimeline.txt';
import NumberedTimeline from '../../pubComponents/NumberedTimeline';
import ntText from '../../pubComponents/NumberedTimeline.txt';
export default function Timeline() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<VerticalTimeline />} title="Vertical Timeline" myCode={vtText} />
      <Wrapper compChild={<NumberedTimeline />} title="Numbered Timeline" myCode={ntText} />
    </SectionWrapper>
  );
}
