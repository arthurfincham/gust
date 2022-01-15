export default function VerticalProgress() {
  const min = 0;
  const max = 100;
  const current = 20;

  const progressStyle = {
    height: `${current}%`,
  };
  return (
    <div className="w-[20px] h-3/4 bg-indigo-100 relative  rounded-xl">
      <div style={progressStyle} className="w-[20px] rounded-b-xl bottom-0 bg-indigo-600 absolute"></div>
    </div>
  );
}
