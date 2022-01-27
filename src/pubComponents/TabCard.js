import { useState } from 'react';

const CardContent = ({ children }) => {
  return (
    <div className="w-full h-[350px] bg-white flex flex-col space-y-4 border-t border-indigo-600 rounded-b-xl items-center justify-center">
      {children}
    </div>
  );
};

const FirstTab = () => {
  return (
    <CardContent>
      <h1>First Tab</h1>
      <p>This the first tab of three made with Gust UI.</p>
    </CardContent>
  );
};

const SecondTab = () => {
  return (
    <CardContent>
      <h1>Second Tab</h1>
      <p>This is the second tab of three made with Gust UI.</p>
    </CardContent>
  );
};

const ThirdTab = () => {
  return (
    <CardContent>
      <h1>Third Tab</h1>
      <p>This is the third and final made with Gust UI.</p>
    </CardContent>
  );
};

export default function TabCard() {
  const [liveTab, setLiveTab] = useState(<FirstTab />);

  const handleClick = (tab) => {
    setLiveTab(tab);
  };

  const buttonClasses = 'border border-primary-600 rounded-lg bg-white shadow-md p-2 border-b-0 rounded-b-none hover:bg-gray-100';

  return (
    <div className="w-3/4 bg-gray-100 rounded-xl">
      <div className="flex px-3 pt-4 space-x-2 overflow-hidden rounded-t-xl">
        <button className={buttonClasses} onClick={() => setLiveTab(<FirstTab />)}>
          Tab One
        </button>
        <button className={buttonClasses} onClick={() => setLiveTab(<SecondTab />)}>
          Tab Two
        </button>
        <button className={buttonClasses} onClick={() => setLiveTab(<ThirdTab />)}>
          Tab Three
        </button>
      </div>
      {liveTab}
    </div>
  );
}
