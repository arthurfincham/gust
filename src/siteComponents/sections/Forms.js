import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import ContactForm from '../../pubComponents/ContactForm';
import nlText from '../../pubComponents/ContactForm.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<ContactForm />} title="Contact Form" myCode={nlText} />
    </SectionWrapper>
  );
}
