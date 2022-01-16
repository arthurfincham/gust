import { CodeBlock } from 'react-code-blocks';

export default function Wrapper({ compChild, title, myCode }) {
  return (
    <div className="flex flex-col min-h-[300px] justify-center bg-white my-6 w-[85%]">
      <div className="flex items-center justify-center w-full h-1/2">{compChild}</div>
      <div className="w-full p-2 m-2 h-1/2 bg-gray-50">
        <h3 className="mx-auto text-center ">{title}</h3>
        <CodeBlock text={myCode} language="jsx" wrapLines />
      </div>
    </div>
  );
}
