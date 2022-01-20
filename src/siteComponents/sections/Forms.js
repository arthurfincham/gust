import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import ContactForm from '../../pubComponents/ContactForm';
import cfText from '../../pubComponents/ContactForm.txt';
import ContactFormTitled from '../../pubComponents/ContactFormTitled';
import cftText from '../../pubComponents/ContactFormTitled.txt';
import NewsletterForm from '../../pubComponents/NewsletterForm';
import nfText from '../../pubComponents/NewsletterForm.txt';
import NewsletterFormTitled from '../../pubComponents/NewsletterFormTitled';
import nftText from '../../pubComponents/NewsletterFormTitled.txt';
import SignInForm from '../../pubComponents/SignInForm';
import siText from '../../pubComponents/SignInForm.txt';
import SignUpForm from '../../pubComponents/SignUpForm';
import suText from '../../pubComponents/SignUpForm.txt';

export default function Buttons() {
  return (
    <SectionWrapper>
      <Wrapper compChild={<ContactForm />} title="Contact Form" myCode={cfText} />
      <Wrapper compChild={<ContactFormTitled />} title="Titled Contact Form" myCode={cftText} />
      <Wrapper compChild={<NewsletterForm />} title="Newsletter Form" myCode={nfText} />
      <Wrapper compChild={<NewsletterFormTitled />} title="Titled Newsletter Form" myCode={nftText} />
      <Wrapper compChild={<SignInForm />} title="Sign In Form" myCode={siText} />
      <Wrapper compChild={<SignUpForm />} title="Sign Up Form" myCode={suText} />
    </SectionWrapper>
  );
}
