import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import BasicButton from '../../pubComponents/BasicButton';
import OutlinedButton from '../../pubComponents/OutlinedButton';
import bbText from '../../pubComponents/BasicButton.txt';
import obText from '../../pubComponents/OutlinedButton.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<BasicButton />} title="Basic Button" myCode={bbText} />
      <Wrapper compChild={<OutlinedButton />} title="Outlined Button" myCode={obText} />
    </SectionWrapper>
  );
}
