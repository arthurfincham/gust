export default function VerticalTimeline() {
  const rowDirection = (item) => {
    if (item.id % 2 === 0) {
      return {
        flexDirection: 'row',
      };
    } else {
      return {
        flexDirection: 'row-reverse',
      };
    }
  };

  const data = [
    { id: 1, date: 2017, title: 'First' },
    { id: 2, date: 2018, title: 'Second' },
    { id: 3, date: 2019, title: 'Third' },
    { id: 4, date: 2020, title: 'Fourth' },
  ];

  const lineStyle = {
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/4 h-[500px] p-1  bg-white rounded-xl shadow-xl relative">
      {data.map((event, index) => {
        return (
          <div key={index + 1} style={rowDirection(event)} className="flex items-center w-3/4 shrink-0 h-1/6">
            <div className="w-1/3 h-2 shrink-0"></div>
            <div className="relative w-1/3 h-full">
              <span style={lineStyle} className="z-10 absolute left-[50%] top-[50%] bg-white handwriting font-bold tracking-wider text-2xl">
                {event.date}
              </span>
            </div>
            <div className="flex justify-center w-1/3 shrink-0 ">
              <span className="tracking-wide font-sans-b">{event.title}</span>
            </div>
          </div>
        );
      })}
      <span style={lineStyle} className="h-5/6 bg-primary-600 w-[2px] absolute left-[50%] top-[50%] z-0"></span>
    </div>
  );
}
