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
  `;

  const fontFace = ` /* ./src/fonts/Roboto/Roboto.css */

@font-face {
  font-family: 'Roboto-Black';
  src: local('Roboto-Black'), url('./Roboto-Black.ttf') format('truetype');
}
  
@font-face {
  font-family: 'Roboto-Bold';
  src: local('Roboto-Bold'), url('./Roboto-Bold.ttf') format('truetype');
}
  `;

  const fontClasses = `/* ./src/fonts/Roboto/Roboto.css */
...

h1 {
  font-family: 'Roboto-Black';
}

h2 {
  font-family: 'Roboto-Bold';
}

...

.roboto-black {
  font-family: 'Roboto-Black';
}

.roboto-bold {
  font-family: 'Roboto-Bold';
}

...
  `;

  const fontUnsized = `<h1>Title</h1>
<p>Paragraph</p>
`;

  const fontSized = `<h1 className="text-3xl">Title</h1>
<p className="text-md">Paragraph</p>`;
  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <h2>Repeat these steps for your secondary font.</h2>

      <p>
        First download the Roboto family from Google Fonts{' '}
        <a className="font-bold underline text-primary-700" href="https://fonts.google.com/specimen/Nanum+Pen+Script" alt="link to Nanum">
          here
        </a>
        .
      </p>
      <p>
        Then download the Nanum Pen Script family from Google Fonts{' '}
        <a className="font-bold underline text-primary-700" href="https://fonts.google.com/specimen/Roboto" alt="link to Roboto">
          here
        </a>
        .
      </p>
      <DocCodeBlock lang="markdown">{folderStructure}</DocCodeBlock>
      <br></br>
      <h2>Importing Fonts</h2>
      <p>Inside your Roboto.css file, import the fonts using Font Face.</p>
      <DocCodeBlock lang="css">{fontFace}</DocCodeBlock>
      <p>Then import this file in your index.css</p>

      <br></br>
      <h2>Configuring Fonts</h2>
      <p>I would recommend assigning each HTML heading type to a variant, as well as creating a class for each font for later customisation.</p>
      <DocCodeBlock lang="css">{fontClasses}</DocCodeBlock>
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
      <p>
        If you would like to use another font, find another from Google or any other source and follow the steps above. I reccomend using a font with
        at least 5 variants.
      </p>
    </div>
  );
}
