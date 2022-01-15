import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Wrapper({ compChild, title, myCode }) {
  return (
    <div className="flex min-h-[300px] justify-center bg-white my-6 w-[85%]">
      <div className="flex items-center justify-center w-1/2">{compChild}</div>
      <div className="w-1/2 p-2 m-2 bg-gray-50">
        <h3 className="mx-auto text-center ">{title}</h3>
        <SyntaxHighlighter style={materialLight} wrapLongLines={true} language="jsx">
          {myCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
