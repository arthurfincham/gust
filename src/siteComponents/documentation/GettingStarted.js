import DocCodeBlock from '../DocCodeBlock';
import DummyBar from '../../pubComponents/DummyBar';

export default function GettingStarted() {
  const configFile = `// tailwing.config.js
  
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {},
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    plugins: [],
  };
  `;

  const imports = `// index.css

@tailwind base;
@tailwind components;
@tailwind utilities;`;
  return (
    <div className="w-full h-auto space-y-4 text-lg">
      <p>To get started, install Tailwind CSS.</p>
      <DocCodeBlock lang="shell">npm install -D tailwindcss</DocCodeBlock>
      <DocCodeBlock lang="shell">npx tailwindcss init</DocCodeBlock>
      <p>This will create a config file in the root of your directory.</p>
      <DocCodeBlock lang="javascript">{configFile}</DocCodeBlock>
      <p>Then import the required Tailwind files in your css.</p>
      <DocCodeBlock lang="javascript">{imports}</DocCodeBlock>
      <br></br>

      <div className="flex justify-center w-full demoBox">
        <DummyBar min={0} max={100} value={75} />
      </div>

      <p>To get the code for a component, click on the tag button.</p>
      <p>From there you can copy and paste the component as required.</p>
    </div>
  );
}
