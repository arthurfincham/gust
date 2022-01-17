import DocCodeBlock from '../DocCodeBlock';

export default function CustomColors() {
  const configFile = `// ./tailwing.config.js
  
...
'primary': {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
},
...
`;

  const themeColors = [
    'bg-primary-50',
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
    'bg-primary-400',
    'bg-primary-500',
    'bg-primary-600',
    'bg-primary-700',
    'bg-primary-800',
    'bg-primary-900',
  ];

  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <p>By default, Gust uses Tailwind's indigo as the primary color.</p>
      <DocCodeBlock lang="javascript">{configFile}</DocCodeBlock>
      <p>These colors render like so.</p>
      <div className="flex flex-wrap items-center space-y-4 colorPreviewDocs">
        {themeColors.map((color) => {
          return (
            <div className="flex flex-col items-center justify-center w-[50px] ">
              <div className={`w-[50px] h-[50px] rounded-xl ${color}`}></div>
              <span className="mt-1 text-xs italic roboto-light">{color.replace(/\D/g, '')}</span>
            </div>
          );
        })}
      </div>
      <p>To use another color for you project, replace the colors defined in your config file.</p>
      <p>
        Alternatively, choose a color from Tailwind's selection{' '}
        <a className="underline text-primary-600" href="https://tailwindcss.com/docs/customizing-colors" alt="Tailwind Colors">
          here
        </a>
        .
      </p>
      <p>You can then replace all occurences of primary with the color of your choice.</p>
    </div>
  );
}
