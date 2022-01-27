import Progress from './progress/Progress';
import DataDisplay from './dataDisplay/DataDisplay';
import Buttons from './buttons/Buttons';
import Timeline from './timeline/Timeline';
import Text from './text/Text';
import Lists from './lists/Lists';
import Forms from './forms/Forms';
import Waves from './waves/Waves';
import Cards from './cards/Cards';

export default function AllComponents() {
  return (
    <div className="flex flex-col items-center w-full">
      <Buttons />
      <Cards />
      <DataDisplay />
      <Forms />
      <Lists />
      <Progress />
      <Text />
      <Timeline />
      <Waves />
    </div>
  );
}
