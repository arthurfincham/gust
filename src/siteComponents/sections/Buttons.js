import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import BasicButton from '../../pubComponents/BasicButton';
import bbText from '../../pubComponents/BasicButton.txt';
import OutlinedButton from '../../pubComponents/OutlinedButton';
import obText from '../../pubComponents/OutlinedButton.txt';
import IconButton from '../../pubComponents/IconButton';
import ibText from '../../pubComponents/IconButton.txt';
import OutlinedIconButton from '../../pubComponents/OutlinedIconButton';
import oibText from '../../pubComponents/OutlinedIconButton.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<BasicButton />} title="Basic Button" myCode={bbText} />
      <Wrapper compChild={<OutlinedButton />} title="Outlined Button" myCode={obText} />
      <Wrapper compChild={<IconButton />} title="Icon Button" myCode={ibText} />
      <Wrapper compChild={<OutlinedIconButton />} title="Outlined Icon Button" myCode={oibText} />
    </SectionWrapper>
  );
}
