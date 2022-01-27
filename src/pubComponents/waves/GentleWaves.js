import React from 'react';
export default function GentleWaves({ children }) {
  const Wave = ({ className }) => {
    return (
      <svg
        className={className}
        width="110%"
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,10L12,21.7C24,33,48,57,72,58.3C96,60,120,40,144,35C168,30,192,40,216,40C240,40,264,30,288,33.3C312,37,336,53,360,51.7C384,50,408,30,432,26.7C456,23,480,37,504,46.7C528,57,552,63,576,56.7C600,50,624,30,648,28.3C672,27,696,43,720,53.3C744,63,768,67,792,65C816,63,840,57,864,55C888,53,912,57,936,50C960,43,984,27,1008,28.3C1032,30,1056,50,1080,50C1104,50,1128,30,1152,26.7C1176,23,1200,37,1224,48.3C1248,60,1272,70,1296,66.7C1320,63,1344,47,1368,46.7C1392,47,1416,63,1440,58.3C1464,53,1488,27,1512,13.3C1536,0,1560,0,1584,13.3C1608,27,1632,53,1656,63.3C1680,73,1704,67,1716,63.3L1728,60L1728,100L1716,100C1704,100,1680,100,1656,100C1632,100,1608,100,1584,100C1560,100,1536,100,1512,100C1488,100,1464,100,1440,100C1416,100,1392,100,1368,100C1344,100,1320,100,1296,100C1272,100,1248,100,1224,100C1200,100,1176,100,1152,100C1128,100,1104,100,1080,100C1056,100,1032,100,1008,100C984,100,960,100,936,100C912,100,888,100,864,100C840,100,816,100,792,100C768,100,744,100,720,100C696,100,672,100,648,100C624,100,600,100,576,100C552,100,528,100,504,100C480,100,456,100,432,100C408,100,384,100,360,100C336,100,312,100,288,100C264,100,240,100,216,100C192,100,168,100,144,100C120,100,96,100,72,100C48,100,24,100,12,100L0,100Z" />
      </svg>
    );
  };
  return (
    <div className="w-full h-[400px] flex flex-col justify-center  pb-3 bg-white overflow-hidden">
      <Wave className="fill-primary-600" />
      <div className="bg-primary-600 h-[250px] w-full flex flex-col justify-center items-center">
        {children}
      </div>
      <Wave className="rotate-180 fill-primary-600 mt-[-1px]" />
    </div>
  );
}
