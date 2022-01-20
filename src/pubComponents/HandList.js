export default function HandList({ listData }) {
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  const getNum = (int) => {
    return numbers[int];
  };

  const listStyle = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'baseline',
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/4 h-[500px] p-1  bg-white rounded-xl shadow-xl relative text-2xl">
      <ul className="space-y-6">
        {listData.map((item, index) => {
          return (
            <div className="text-md" style={listStyle}>
              <span className="handwriting w-[50px] text-right text-primary-600">{getNum(index)}</span>
              <li className="ml-3 font-sans ">{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
