import { CodeBlock, atomOneLight } from 'react-code-blocks';
export default function DocCodeBlock({ lang, children, highlight }) {
  return <CodeBlock showLineNumbers={false} text={children} theme={atomOneLight} language={lang} wrapLines highlight={highlight} />;
}
