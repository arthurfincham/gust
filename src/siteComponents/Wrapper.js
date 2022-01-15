export default function Wrapper({ compChild, info }) {
  return (
    <div className="flex min-h-[300px] justify-center bg-white my-6 w-2/3">
      <div className="w-1/2 flex items-center justify-center">{compChild}</div>
      <div className="w-1/2 bg-gray-50 m-2 p-2">
        <h3>{info}</h3>
      </div>
    </div>
  );
}
