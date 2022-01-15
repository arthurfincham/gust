export default function HorizontalProgress() {
  const min = 0;
  const max = 100;
  const current = 20;

  const progressStyle = {
    width: `${current}%`,
  };
  return (
    <div className="h-[20px] w-2/3 bg-indigo-100 relative  my-auto rounded-xl">
      <div style={progressStyle} className="h-[20px] rounded-l-xl bg-indigo-600 absolute"></div>
    </div>
  );
}
