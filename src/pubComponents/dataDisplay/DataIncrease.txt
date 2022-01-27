import React from 'react';
export default function DataIncrease() {
  const data = [
    { label: '2017', value: 55 },
    { label: '2018', value: 97 },
    { label: '2019', value: 121 },
    { label: '2020', value: 136 },
    { label: '2021', value: 148 },
  ];

  const max = 250;

  const unit = '£';

  const pointHeight = item => {
    const val = item.value;
    const res = (val / max) * 100;
    return {
      height: `${res}%`,
    };
  };

  return (
    <div className="flex justify-around items-end w-full h-[200px] p-1 pb-3 bg-white rounded-xl shadow-xl">
      {data.map((item, index) => {
        return (
          <div
            key={index + 1}
            className="flex flex-col items-center justify-end h-full"
          >
            <span className="text-sm tracking-wide text-primary-700 font-sans-bb">
              {unit}
              {item.value}k
            </span>
            <div
              style={pointHeight(item)}
              className="bg-primary-400 w-[2px] mt-1 "
            ></div>
            <span className="text-2xl font-bold text-primary-700 handwriting">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
