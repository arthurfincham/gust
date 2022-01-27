import Progress from './Progress';
import DataDisplay from './DataDisplay';
import Buttons from './Buttons';
import Timeline from './Timeline';
import Text from './Text';
import Lists from './Lists';
import Forms from './Forms';
import Waves from './Waves';
import Cards from './Cards';

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
