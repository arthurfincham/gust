import SectionWrapper from '../../siteComponents/SectionWrapper';
import Wrapper from '../../siteComponents/Wrapper';
import ContactForm from './ContactForm';
import cfText from './ContactForm.txt';
import ContactFormTitled from './ContactFormTitled';
import cftText from './ContactFormTitled.txt';
import NewsletterForm from './NewsletterForm';
import nfText from './NewsletterForm.txt';
import NewsletterFormTitled from './NewsletterFormTitled';
import nftText from './NewsletterFormTitled.txt';
import SignInForm from './SignInForm';
import siText from './SignInForm.txt';
import SignUpForm from './SignUpForm';
import suText from './SignUpForm.txt';

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
