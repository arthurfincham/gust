import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import VerticalTimeline from './VerticalTimeline';
import vtText from './VerticalTimeline.txt';
import NumberedTimeline from './NumberedTimeline';
import ntText from './NumberedTimeline.txt';
export default function Timeline() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<VerticalTimeline />} title="Dated Timeline" myCode={vtText} />
      <Wrapper compChild={<NumberedTimeline />} title="Numbered Timeline" myCode={ntText} />
    </SectionWrapper>
  );
}
