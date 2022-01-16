import Wrapper from '../../siteComponents/Wrapper';

export default function BasicButton() {
  const component = (
    <button className="px-2 py-1 bg-indigo-600 shadow-md shadow-indigo-500/50 rounded-xl">
      <span className="tracking-wide text-white roboto-bold">Basic Button</span>
    </button>
  );

  const code = `
<button className="px-2 py-1 bg-indigo-600 shadow-md shadow-indigo-500/50 rounded-xl">
      <span className="tracking-wide text-white roboto-bold">Basic Button</span>
</button>
 `;
  return <Wrapper compChild={component} title="Basic Button" myCode={code} />;
}
