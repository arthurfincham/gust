import HorizontalProgress from './progress/HorizontalProgress';
import VerticalProgress from './progress/VerticalProgress';

export default function AllComponents() {
  const progressProps = {
    min: 0,
    max: 100,
    value: 35,
  };
  return (
    <div className="flex flex-col items-center w-full">
      <HorizontalProgress {...progressProps} />
      <VerticalProgress {...progressProps} />
    </div>
  );
}
