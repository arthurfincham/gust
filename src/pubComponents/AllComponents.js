import HorizontalProgress from './HorizontalProgress';
import VerticalProgress from './VerticalProgress';
import { HoriProg, VertProg } from './CodeFile';
import Wrapper from '../siteComponents/Wrapper';

export default function AllComponents() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };
  return (
    <div className="flex flex-col items-center w-full">
      <Wrapper compChild={<HorizontalProgress {...progressProps} />} title="Horizontal Progress" myCode={HoriProg} />
      <Wrapper compChild={<VerticalProgress {...progressProps} />} title="Vertical Progress" myCode={VertProg} />
    </div>
  );
}
