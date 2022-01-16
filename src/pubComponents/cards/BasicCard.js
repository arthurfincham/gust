import Wrapper from '../../siteComponents/Wrapper';

export default function BasicCard() {
  const component = (
    <div className="block w-[250px] bg-white p-2 rounded-xl border-[0.05em] shadow-lg">
      <div className="relative flex flex-col">
        <span className="text-lg roboto-bold">Basic Card</span>
        <span className="mb-1 text-sm roboto-regular">Subtitle</span>
        <span className="text-xs roboto-light">This is a placeholder description for the Gust basic card. You can enter any text that you like.</span>
      </div>
    </div>
  );

  const code = `
  export default function BasicCard() {
    <div className="block w-[250px] bg-white p-2 rounded-xl border-[0.05em] shadow-lg">
      <div className="relative flex flex-col">
        <span className="text-lg roboto-bold">Basic Card</span>
        <span className="mb-1 text-sm roboto-regular">Subtitle</span>
        <span className="text-xs roboto-light">This is a placeholder description for the Gust basic card. You can enter any text that you like.</span>
      </div>
  </div>
  )};`;

  return <Wrapper compChild={component} title="Basic Card" myCode={code} />;
}
