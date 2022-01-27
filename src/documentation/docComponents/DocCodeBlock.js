import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gustDocTheme } from './gustDocTheme';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';

import React from 'react';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('javascript', javascript);
export default function DocCodeBlock({ lang, children }) {
  return (
    <SyntaxHighlighter language={lang} style={gustDocTheme}>
      {children}
    </SyntaxHighlighter>
  );
}
