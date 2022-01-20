export default {
  'code[class*="language-"]': {
    color: '#4D45E6',
    background: 'none',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    maxHeight: 'inherit',
    height: 'inherit',
    padding: '0 1em',
    display: 'block',
    overflow: 'auto',
  },
  'pre[class*="language-"]': {
    color: 'black',
    background: 'none',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    position: 'relative',
    margin: '.5em 0',
    overflow: 'visible',
    padding: '0',
    backgroundColor: '#fdfdfd',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box',
    marginBottom: '1em',
  },
  'pre[class*="language-"]>code': {
    position: 'relative',
    borderLeft: '10px solid #358ccb',
    boxShadow: '-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf',
    backgroundColor: '#fdfdfd',
    backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
    backgroundSize: '3em 3em',
    backgroundOrigin: 'content-box',
    backgroundAttachment: 'local',
  },
  ':not(pre) > code[class*="language-"]': {
    backgroundColor: '#fdfdfd',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box',
    marginBottom: '1em',
    position: 'relative',
    padding: '.2em',
    borderRadius: '0.3em',
    color: '#c92c2c',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'inline',
    whiteSpace: 'normal',
  },
  'pre[class*="language-"]:before': {
    content: "''",
    zIndex: '-2',
    display: 'block',
    position: 'absolute',
    bottom: '0.75em',
    left: '0.18em',
    width: '40%',
    height: '20%',
    maxHeight: '13em',
    boxShadow: '0px 13px 8px #979797',
    WebkitTransform: 'rotate(-2deg)',
    MozTransform: 'rotate(-2deg)',
    msTransform: 'rotate(-2deg)',
    OTransform: 'rotate(-2deg)',
    transform: 'rotate(-2deg)',
  },
  'pre[class*="language-"]:after': {
    content: "''",
    zIndex: '-2',
    display: 'block',
    position: 'absolute',
    bottom: '0.75em',
    left: 'auto',
    width: '40%',
    height: '20%',
    maxHeight: '13em',
    boxShadow: '0px 13px 8px #979797',
    WebkitTransform: 'rotate(2deg)',
    MozTransform: 'rotate(2deg)',
    msTransform: 'rotate(2deg)',
    OTransform: 'rotate(2deg)',
    transform: 'rotate(2deg)',
    right: '0.75em',
  },
  comment: {
    color: '#7D8B99',
  },
  'block-comment': {
    color: '#7D8B99',
  },
  prolog: {
    color: '#7D8B99',
  },
  doctype: {
    color: '#7D8B99',
  },
  cdata: {
    color: '#7D8B99',
  },
  punctuation: {
    color: '#5F6364',
  },
  property: {
    color: '#F23C1F',
  },
  tag: {
    color: '#F23C1F',
  },
  boolean: {
    color: '#F23C1F',
  },
  number: {
    color: '#F23C1F',
  },
  'function-name': {
    color: '#F23C1F',
  },
  constant: {
    color: '#F23C1F',
  },
  symbol: {
    color: '#F23C1F',
  },
  deleted: {
    color: '#F23C1F',
  },
  selector: {
    color: '#4F47E6',
  },
  'attr-name': {
    color: '#4F47E6',
    fontStyle: 'italic',
  },
  string: {
    color: '#4F47E6',
  },
  char: {
    color: '#4F47E6',
  },
  function: {
    color: '#4F47E6',
    fontWeight: 'bold',
  },
  builtin: {
    color: '#4F47E6',
  },
  inserted: {
    color: '#4F47E6',
  },
  operator: {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  entity: {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
    cursor: 'help',
  },
  url: {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  variable: {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  atrule: {
    color: '#7B75E6',
  },
  'attr-value': {
    color: '#6A7180',
  },
  keyword: {
    color: '#7B75E6',
  },
  'class-name': {
    color: '#7B75E6',
  },
  regex: {
    color: '#e90',
  },
  important: {
    color: '#e90',
    fontWeight: 'normal',
  },
  '.language-css .token.string': {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  '.style .token.string': {
    color: '#a67f59',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  namespace: {
    Opacity: '.7',
  },
  'pre[class*="language-"].line-numbers.line-numbers': {
    paddingLeft: '0',
  },
  'pre[class*="language-"].line-numbers.line-numbers code': {
    paddingLeft: '3.8em',
  },
  'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': {
    left: '0',
  },
  'pre[class*="language-"][data-line]': {
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
  },
  'pre[data-line] code': {
    position: 'relative',
    paddingLeft: '4em',
  },
  'pre .line-highlight': {
    marginTop: '0',
  },
};
