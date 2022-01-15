import VerticalProgress from '../pubComponents/VerticalProgress';
import HorizontalProgress from '../pubComponents/HorizontalProgress';
import { HoriProg, VertProg } from '../pubComponents/CodeFile';
import Wrapper from './Wrapper';

export default function Components() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Components</h1>
      <Wrapper compChild={<HorizontalProgress {...progressProps} />} title="Horizontal Progress" myCode={HoriProg} />
      <Wrapper compChild={<VerticalProgress {...progressProps} />} title="Vertical Progress" myCode={VertProg} />
    </div>
  );
}
