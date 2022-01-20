import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import ArrowList from '../../pubComponents/ArrowList';
import HandList from '../../pubComponents/HandList';
import alText from '../../pubComponents/ArrowList.txt';
import hlText from '../../pubComponents/HandList.txt';

export default function Lists() {
  const listData = ['A list item', 'Another list item', 'A third list item', 'A fourth list item', 'And a fifth list item'];
  return (
    <SectionWrapper>
      <Wrapper compChild={<ArrowList listData={listData} />} title="Arrow List" myCode={alText} />
      <Wrapper compChild={<HandList listData={listData} />} title="Handwritten List" myCode={hlText} />
    </SectionWrapper>
  );
}
