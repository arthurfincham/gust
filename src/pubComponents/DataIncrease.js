export default function DataIncrease() {
  const data = [
    { label: '2017', value: 55000 },
    { label: '2018', value: 97000 },
    { label: '2019', value: 121000 },
    { label: '2020', value: 136000 },
    { label: '2021', value: 148000 },
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
            <span className="text-sm tracking-wide text-primary-700 roboto-black">
              {unit}
              {formatValue(item)}
            </span>
            <div style={pointHeight(item)} className="bg-primary-700 w-[2px] mt-1 "></div>
            <span className="text-2xl font-bold text-primary-700 handwriting">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
