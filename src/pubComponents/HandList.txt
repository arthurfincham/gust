export default function HandList() {
  const data = ['This is a list item', 'This is another list item', 'This is yet another list item', 'This is the final list item'];

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
        {data.map((item, index) => {
          return (
            <div style={listStyle}>
              <span className="handwriting w-[50px] text-right text-primary-600">{getNum(index)}</span>
              <li className="ml-3 listItem font-sans-b">{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
