import Wrapper from '../../siteComponents/Wrapper';
import SectionWrapper from '../../siteComponents/SectionWrapper';
import BasicCard from './BasicCard';

export default function Cards() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<BasicCard />} title="Basic Card" myCode="Basic card" />
    </SectionWrapper>
  );
}
