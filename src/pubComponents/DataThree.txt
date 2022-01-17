export default function DataThree() {
  const data = [
    { label: 'Repos', value: 88 },
    { label: 'Commits', value: 971 },
    { label: 'PRs', value: 136 },
  ];

  return (
    <div className="flex justify-around items-end w-full h-[100px] p-1 pb-3 bg-primary-600 rounded-xl shadow-xl">
      {data.map((item) => {
        return (
          <div className="flex flex-col items-center justify-center space-y-[-5px]">
            <span className="text-4xl text-white md:text-5xl roboto-black">{item.value}</span>
            <span className="text-2xl font-bold text-white text-md handwriting">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
