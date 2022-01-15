export default function VerticalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    height: `${current}%`,
  };

  return (
    <div className="w-[20px] h-3/4 shadow-md bg-indigo-100 relative  rounded-xl my-1">
      <div style={progressStyle} className="w-[20px] rounded-b-xl bottom-0 bg-indigo-600 absolute">
        <span className="absolute top-[-5px] text-center w-[10px] text-xs left-7">{current}%</span>
      </div>
    </div>
  );
}
