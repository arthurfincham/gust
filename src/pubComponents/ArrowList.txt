export default function ArrowList({ listData }) {
  const arrow = () => {
    return (
      <svg height="26px" width="30px" className="fill-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.71 16.67">
        <path d="M40.72,8.08h0c-14.9-.5-27-.66-38-.48a.91.91,0,0,0-.78,1,.86.86,0,0,0,.76.95c11-.18,23.09,0,38,.48a.88.88,0,0,0,.81-.93A.89.89,0,0,0,40.72,8.08Z" />
        <path d="M33.78,15.18a1,1,0,0,1-.49-1.88c1.25-.69,2.49-1.46,3.69-2.2l1.63-1c.31-.18.7-.39,1.12-.6s.61-.31.9-.48A18.9,18.9,0,0,0,38,7.65a16.84,16.84,0,0,1-1.64-.8l-.3-.17a20.2,20.2,0,0,1-5-3.52A1,1,0,1,1,32.58,1.8,19,19,0,0,0,37.07,5l.3.17a16.19,16.19,0,0,0,1.48.71c1.54.71,3.3,1.5,4.21,2.72a1,1,0,0,1-.17,1.37,13,13,0,0,1-2.25,1.35c-.37.19-.72.37-1,.54L38,12.8c-1.22.76-2.48,1.54-3.77,2.25A.94.94,0,0,1,33.78,15.18Z" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/4 h-[500px] p-1  bg-white rounded-xl shadow-xl relative text-2xl">
      <ul className="space-y-6">
        {listData.map((item) => {
          return (
            <div className="flex items-center">
              {arrow()}
              <li className="ml-3 font-sans text-md">{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
