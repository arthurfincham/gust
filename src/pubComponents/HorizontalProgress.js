export default function HorizontalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: `${current}%`,
  };

  return (
    <div className="h-[20px] w-2/3 bg-indigo-100 relative shadow-sm  my-auto rounded-xl">
      <div style={progressStyle} className="h-[20px] rounded-l-xl bg-indigo-600 absolute">
        <span className="absolute top-[-20px] text-center w-[10px] text-xs right-[-1px]">{current}%</span>
      </div>
    </div>
  );
}
