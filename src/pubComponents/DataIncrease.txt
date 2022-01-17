export default function DataIncrease() {
  const data = [
    { label: '17', value: 55000 },
    { label: '18', value: 97000 },
    { label: '19', value: 121000 },
    { label: '20', value: 136000 },
    { label: '21', value: 148000 },
  ];

  const max = 210000;

  const unit = '£';

  const formatValue = (item) => {
    const val = item.value;
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const pointHeight = (item) => {
    const val = item.value;
    const res = (val / max) * 100;
    return {
      height: `${res}%`,
    };
  };

  return (
    <div className="flex justify-around items-end w-full h-[200px] p-1 pb-3 bg-white shadow-lg">
      {data.map((item) => {
        return (
          <div className="flex flex-col items-center justify-end h-full">
            <span className="text-sm tracking-wide text-primary-700 roboto-bold">
              {unit}
              {formatValue(item)}
            </span>
            <div style={pointHeight(item)} className="bg-primary-700 w-[2px] "></div>
            <span className="p-1 text-xs text-primary-700 border-2 border-indigo-700 rounded-full roboto-black h-[25px] w-[25px] flex items-center justify-center">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
