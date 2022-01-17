import DocCodeBlock from '../DocCodeBlock';
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
  };
  `;

  const imports = `// ./src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;`;
  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <p>
        To get started, install Tailwind CSS. For more details, visit the Tailwind docs{' '}
        <a className="text-indigo-600 underline" href="https://tailwindcss.com/docs/installation" alt="link to tailwind">
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
