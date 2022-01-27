import DocCodeBlock from './DocCodeBlock';

export default function InstallTailwind() {
  const configFile = `// ./tailwing.config.js
  
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};`;

  const imports = `/* ./src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;`;
  return (
    <div className="w-full h-auto mt-3 space-y-4 docWrapper scroll-mt-24" id="setUpTailwind">
      <h2>Set Up Tailwind</h2>
      <p>
        To get started, install Tailwind CSS. For more details, visit the Tailwind docs{' '}
        <a className="underline text-primary-600" href="https://tailwindcss.com/docs/installation" alt="link to tailwind">
          here
        </a>
        .
      </p>
      <DocCodeBlock lang="bash">npm install -D tailwindcss</DocCodeBlock>
      <DocCodeBlock lang="bash">npx tailwindcss init</DocCodeBlock>
      <p>This will create a config file in the root of your directory.</p>
      <DocCodeBlock lang="javascript">{configFile}</DocCodeBlock>
      <p>Then import the required Tailwind files in your css.</p>
      <DocCodeBlock lang="css">{imports}</DocCodeBlock>
      <br></br>
    </div>
  );
}
