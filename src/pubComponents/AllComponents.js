import HorizontalProgress from './progress/HorizontalProgress';
import VerticalProgress from './progress/VerticalProgress';
import BasicCard from './cards/BasicCard';
import BasicButton from './buttons/BasicButton';
import OutlinedButton from './buttons/OutlinedButton';
import DataThree from './data/DataThree';
import DataFour from './data/DataFour';

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
      <BasicCard />
      <BasicButton />
      <OutlinedButton />
      <DataThree />
      <DataFour />
    </div>
  );
}
