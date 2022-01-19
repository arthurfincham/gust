export default function HorizontalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    width: `${current}%`,
  };

  return (
    <div className="w-2/3 h-[90px] bg-white shadow-xl rounded-xl flex items-center justify-center">
      <div className="mb-6 h-[20px] w-[90%] bg-primary-100 relative shadow-sm  my-auto rounded-xl ">
        <div style={progressStyle} className="h-[20px] rounded-l-xl bg-primary-600 absolute">
          <span className="absolute top-[-30px] text-center w-[10px] text-2xl font-hand right-[-1px]">{current}%</span>
        </div>
      </div>
    </div>
  );
}
