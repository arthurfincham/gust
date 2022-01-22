import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gustCodeTheme } from './gustCodeTheme';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('javascript', javascript);

export default function DocCodeBlock({ lang, children }) {
  return (
    <SyntaxHighlighter language={lang} style={gustCodeTheme}>
      {children}
    </SyntaxHighlighter>
  );
}
