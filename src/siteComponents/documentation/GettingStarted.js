import DocCodeBlock from '../DocCodeBlock';
import DummyBar from '../../pubComponents/DummyBar';

export default function GettingStarted() {
  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <h2>Get your fonts</h2>
      <p>Gust uses two fonts: a sans-serif and a handwriting typeface.</p>
      <p>
        The defaults are{' '}
        <a className="underline text-primary-700" href="https://fonts.google.com/specimen/Roboto" alt="link to Roboto">
          Roboto
        </a>{' '}
        and{' '}
        <a className="underline text-primary-700" href="https://fonts.google.com/specimen/Nanum+Pen+Script" alt="link to Nanum">
          Nanum Pen Script
        </a>{' '}
        which can be downloaded for free from Google Fonts.
      </p>
      <p></p>
      <div className="flex justify-center w-full demoBox">
        <DummyBar min={0} max={100} value={75} />
      </div>

      <p>To get the code for a component, click on the tag button.</p>
      <p>From there you can copy and paste the component as required.</p>
    </div>
  );
}
