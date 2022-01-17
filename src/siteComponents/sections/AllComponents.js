import HorizontalProgress from '../../pubComponents/HorizontalProgress';
import VerticalProgress from '../../pubComponents/VerticalProgress';
import BasicCard from '../../pubComponents/cards/BasicCard';
import BasicButton from '../../pubComponents/BasicButton';
import OutlinedButton from '../../pubComponents/buttons/OutlinedButton';
import DataThree from '../../pubComponents/data/DataThree';
import DataFour from '../../pubComponents/DataFour';

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
