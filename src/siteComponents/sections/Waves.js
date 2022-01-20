import SectionWrapper from '../SectionWrapper';
import Wrapper from '../Wrapper';
import GentleWaves from '../../pubComponents/GentleWaves';
import gwText from '../../pubComponents/GentleWaves.txt';
import HeavyWaves from '../../pubComponents/HeavyWaves';
import hwText from '../../pubComponents/HeavyWaves.txt';

export default function Waves() {
  const waveChildren = (
    <>
      <h1 className="text-5xl text-white font-sans-bb">Title</h1>
      <p className="text-xl text-center text-white font-sans-b">A wave divider is a nice transition between sections or divs.</p>
    </>
  );
  return (
    <SectionWrapper>
      <Wrapper compChild={<GentleWaves>{waveChildren}</GentleWaves>} title="Gentle Waves" myCode={gwText} />
      <Wrapper compChild={<HeavyWaves>{waveChildren}</HeavyWaves>} title="Heavy Waves" myCode={gwText} />
    </SectionWrapper>
  );
}
