import DocCodeBlock from '../DocCodeBlock';

export default function CustomFonts() {
  const folderStructure = `
> src
  > fonts 
    > Roboto 
      - Roboto-Black.ttf 
      - Roboto-Bold.ttf
      ...
      - Roboto.css
    > NanumPenScript
      - NanumPenScript-regular.ttf
  `;

  const fontFace = ` /* ./src/fonts/Roboto/Roboto.css */

@font-face {
  font-family: 'Roboto-Black';
  src: local('Roboto-Black'), url('./Roboto-Black.ttf') format('truetype');
}

...

@font-face {
  font-family: 'Roboto-Light';
  src: local('Roboto-Light'), url('./Roboto-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'NanumPenScript';
  src: local('NanumPenscript-Regular'), url('./NanumPenscript-Regular.ttf') format('truetype');
}
  `;

  const fontClasses = `// ./tailwind.config.js

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      hand: 'NanumPenScript',
      sans: 'Roboto-Regular',
      'sans-m': 'Roboto-Medium',
      'sans-b': 'Roboto-Bold',
      'sans-bb': 'Roboto-Black',
    },
    extend: {
      colors: {
        primary: {
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
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
  

  `;

  const fontUnsized = `<h1>Title</h1>
<p>Paragraph</p>
`;

  const fontSized = `<h1 className="text-3xl">Title</h1>
<p className="text-md">Paragraph</p>`;
  return (
    <div className="w-full h-auto space-y-4 docWrapper scroll-mt-20" id="customFonts">
      <h2>Fonts</h2>

      <p>Gust uses two fonts: a sans serif and a handwriting typeface.</p>

      <p>
        Download the Roboto family from Google Fonts{' '}
        <a className="font-bold underline text-primary-700" href="https://fonts.google.com/specimen/Nanum+Pen+Script" alt="link to Nanum">
          here
        </a>
        .
      </p>
      <p>
        Download the Nanum Pen Script family from Google Fonts{' '}
        <a className="font-bold underline text-primary-700" href="https://fonts.google.com/specimen/Roboto" alt="link to Roboto">
          here
        </a>
        .
      </p>
      <p>Add both inside a fonts directory in your project.</p>
      <DocCodeBlock lang="markdown">{folderStructure}</DocCodeBlock>
      <br></br>
      <h2>Importing Fonts</h2>
      <p>Inside your Roboto.css file, import the fonts using Font Face.</p>
      <DocCodeBlock lang="css">{fontFace}</DocCodeBlock>
      <p>Then import this file in your index.css</p>

      <br></br>
      <h2>Configuring Fonts</h2>
      <p>Add your fonts to your Tailwind config file.</p>
      <DocCodeBlock lang="javascript">{fontClasses}</DocCodeBlock>
      <br></br>
      <h2>Font Sizing</h2>
      <p>
        Remember that Tailwind uses{' '}
        <a className="underline text-primary" href="https://tailwindcss.com/docs/preflight" alt="Preflight Link">
          Preflight
        </a>
        .
      </p>
      <p>This removes default margins and leaves headings unstyled.</p>
      <DocCodeBlock lang="jsx">{fontUnsized}</DocCodeBlock>
      <p>In this example, Heading and Paragraph will be the same size.</p>
      <p>To change the font size, use Tailwinds classes names like t-shirt sizing.</p>
      <DocCodeBlock lang="jsx">{fontSized} </DocCodeBlock>
      <br></br>
      <p>
        If you would like to use another font, find another from Google or any other source and follow the steps above. I recommend using a font with
        at least 5 variants.
      </p>
    </div>
  );
}
