import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import ArrowList from '../../pubComponents/ArrowList';
import HandList from '../../pubComponents/HandList';
import alText from '../../pubComponents/ArrowList.txt';
import hlText from '../../pubComponents/HandList.txt';

export default function Lists() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<ArrowList />} title="Arrow List" myCode={alText} />
      <Wrapper compChild={<HandList />} title="Hand List" myCode={hlText} />
    </SectionWrapper>
  );
}
