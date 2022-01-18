export default function NumberedTimeline() {
  const rowDirection = (item) => {
    if (item.id % 2 == 0) {
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
    { id: 1, title: 'Left School' },
    { id: 2, title: 'Started Coding' },
    { id: 3, title: 'Learned Ruby' },
    { id: 4, title: 'Learned React' },
  ];

  const lineStyle = {
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/4 h-[500px] p-1  bg-white rounded-xl shadow-xl relative ">
      {data.map((event, index) => {
        return (
          <div key={index + 1} style={rowDirection(event)} className="flex items-center w-3/4 shrink-0 h-1/5">
            <div className="w-1/3 h-2 shrink-0"></div>
            <div className="relative w-1/3 h-full">
              <span
                style={lineStyle}
                className="z-10 absolute left-[50%] top-[50%]  text-md w-1 h-1 border-2 border-primary-600 rounded-full flex items-center justify-center p-3 roboto-black bg-primary-600 text-white"
              >
                {event.id}
              </span>
            </div>
            <div className="flex justify-center w-1/3 shrink-0 ">
              <span className="text-2xl sm:whitespace-nowrap handwriting">{event.title}</span>
            </div>
          </div>
        );
      })}
      <span style={lineStyle} className="h-5/6 bg-primary-600 w-[3px] absolute left-[50%] top-[50%] z-0"></span>
    </div>
  );
}
