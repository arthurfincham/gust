import Wrapper from '../../siteComponents/Wrapper';

export default function DataFour() {
  const data = [
    { label: 'Repos', value: 88 },
    { label: 'Commits', value: 971 },
    { label: 'PRs', value: 136 },
    { label: 'Stars', value: 49 },
  ];

  const component = (
    <div className="flex justify-around items-end w-full h-[100px] p-1 pb-3 bg-indigo-600">
      {data.map((item) => {
        return (
          <div className="flex flex-col items-center justify-center space-y-[-5px]">
            <span className="text-5xl text-white roboto-black">{item.value}</span>
            <span className="text-white text-md roboto-regular">{item.label}</span>
          </div>
        );
      })}
    </div>
  );

  const code = `
  export default function DataFour() {
    const data = [
      { label: 'Repos', value: 88 },
      { label: 'Commits', value: 971 },
      { label: 'PRs', value: 136 },
      { label: 'Stars', value: 49 },
    ];
  
    return (
      <div className="flex justify-around items-end w-full h-[100px] p-1 pb-3 bg-indigo-600">
        {data.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center space-y-[-5px]">
              <span className="text-5xl text-white roboto-black">{item.value}</span>
              <span className="text-white text-md roboto-regular">{item.label}</span>
            </div>
          );
        })}
      </div>
    )};
  `;
  return <Wrapper compChild={component} title="Data Display x4" myCode={code} />;
}
