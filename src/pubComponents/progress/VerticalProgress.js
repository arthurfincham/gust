import React from 'react';
export default function VerticalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    height: `${current}%`,
  };

  return (
    <div className="bg-white shadow-xl rounded-xl min-h-[250px] h-3/4 w-[90px] flex items-center justify-center">
      <div className="w-[20px] h-[90%] min-h-[200px] shadow-md bg-primary-100 relative  rounded-xl my-1 mr-7">
        <div
          style={progressStyle}
          className="w-[20px] rounded-b-xl bottom-0 bg-primary-600 absolute"
        >
          <span className="absolute top-[-12px] handwriting text-center w-[10px] text-2xl left-7">
            {current}%
          </span>
        </div>
      </div>
    </div>
  );
}
