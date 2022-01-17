import Progress from './Progress';
import DataDisplay from './DataDisplay';
import Cards from './Cards';
import Buttons from './Buttons';
import Timeline from './Timeline';

export default function AllComponents() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress />
      <DataDisplay />
      <Cards />
      <Buttons />
      <Timeline />
    </div>
  );
}
