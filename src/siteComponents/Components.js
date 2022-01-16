import Progress from '../pubComponents/Progress';
import { useState } from 'react';

export default function Components() {
  const progress = <Progress />;

  const [liveComp, setLiveComp] = useState(progress);

  const renderComp = () => {
    return liveComp;
  };

  return (
    <div className="flex h-full">
      <ul className="flex flex-col border-r-2 border-collapse w-[150px]">
        <li className="w-full px-3 py-2 border-b-2 border-collapse">Progress</li>
      </ul>
      <div className="flex flex-col items-center w-full">{renderComp()}</div>
    </div>
  );
}
