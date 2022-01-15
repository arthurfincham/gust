import VerticalProgress from '../pubComponents/VerticalProgress';
import HorizontalProgress from '../pubComponents/HorizontalProgress';
import Wrapper from './Wrapper';
export default function Components() {
  return (
    <div className="flex flex-col items-center">
      <h1>Components</h1>
      <Wrapper compChild={<VerticalProgress />} info="Vertical Progress" />
      <Wrapper compChild={<HorizontalProgress />} info="Horizontal Progress" />
    </div>
  );
}
