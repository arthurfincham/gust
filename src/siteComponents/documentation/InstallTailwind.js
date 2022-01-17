import DocCodeBlock from '../DocCodeBlock';
export default function InstallTailwind() {
  const configFile = `// ./tailwing.config.js
  
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
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
};`;

  const imports = `// ./src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;`;
  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <h2>Set Up Tailwind</h2>
      <p>
        To get started, install Tailwind CSS. For more details, visit the Tailwind docs{' '}
        <a className="underline text-primary-600" href="https://tailwindcss.com/docs/installation" alt="link to tailwind">
          here
        </a>
        .
      </p>
      <DocCodeBlock lang="shell">npm install -D tailwindcss</DocCodeBlock>
      <DocCodeBlock lang="shell">npx tailwindcss init</DocCodeBlock>
      <p>This will create a config file in the root of your directory.</p>
      <DocCodeBlock lang="javascript">{configFile}</DocCodeBlock>
      <p>Then import the required Tailwind files in your css.</p>
      <DocCodeBlock lang="javascript">{imports}</DocCodeBlock>
      <br></br>
    </div>
  );
}
