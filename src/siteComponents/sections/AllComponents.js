import Progress from './Progress';
import DataDisplay from './DataDisplay';
import Buttons from './Buttons';
import Timeline from './Timeline';
import Text from './Text';
import Lists from './Lists';

export default function AllComponents() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress />
      <DataDisplay />
      <Buttons />
      <Timeline />
      <Text />
      <Lists />
    </div>
  );
}
