export const HoriProg = `
export default function HorizontalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: '\${current}%',
  };

  return (
    <div className="h-[20px] w-2/3 bg-indigo-100 relative shadow-sm  my-auto rounded-xl">
      <div style={progressStyle} className="h-[20px] rounded-l-xl bg-indigo-600 absolute">
        <span className="absolute top-[-20px] text-center w-[10px] text-xs right-[-1px]">{current}%</span>
      </div>
    </div>
  );
};
`;

export const VertProg = `
export default function VerticalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: '\${current}%',
  };

  return (
    <div className="w-[20px] h-3/4 shadow-md bg-indigo-100 relative  rounded-xl my-1">
      <div style={progressStyle} className="w-[20px] rounded-b-xl bottom-0 bg-indigo-600 absolute">
        <span className="absolute top-[-5px] text-center w-[10px] text-xs left-7">{current}%</span>
      </div>
    </div>
  );
};
`;
