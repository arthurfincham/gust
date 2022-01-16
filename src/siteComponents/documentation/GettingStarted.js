import DocCodeBlock from '../DocCodeBlock';
export default function GettingStarted() {
  return (
    <div className="w-full h-auto">
      <p>To get started, install Tailwind CSS.</p>
      <DocCodeBlock lang="shell">npm install -D tailwindcss</DocCodeBlock>
      <DocCodeBlock lang="shell">npx tailwindcss init</DocCodeBlock>
      <p>This will create a config file in the root of your directory.</p>
    </div>
  );
}
