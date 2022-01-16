import Wrapper from '../../siteComponents/Wrapper';

export default function OutlinedButton() {
  const component = (
    <button className="px-2 py-1 border-2 border-indigo-600 shadow-md shadow-indigo-500/50 rounded-xl">
      <span className="tracking-wide text-indigo-600 roboto-black">Outlined Button</span>
    </button>
  );

  const code = `
<button className="px-2 py-1 border-2 border-indigo-600 shadow-md shadow-indigo-500/50 rounded-xl">
      <span className="tracking-wide text-indigo-600 roboto-black">Outlined Button</span>
</button>
 `;
  return <Wrapper compChild={component} title="Outlined Button" myCode={code} />;
}
