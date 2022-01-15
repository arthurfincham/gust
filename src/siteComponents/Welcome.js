import LogoBlack from '../svgs/LogoBlack';

export default function Welcome() {
  return (
    <div className="flex flex-col md:flex-row w-full h-5/6 items-center justify-around lg:justify-center">
      <div className="inline-flex flex-col w-3/4 md:w-1/2">
        <LogoBlack svgClass="w-[350px] md:w-[450px] mb-2" />
        <ul className="list-disc ml-12">
          <li className="text-2xl  m-1">React + Tailwind CSS</li>
          <li className="text-2xl m-1">Gorgeous, responsive components</li>
          <li className="text-2xl m-1">No configuration</li>
          <li className="text-2xl m-1">No install</li>
        </ul>
      </div>
      <div className="flex flex-col text-center justify-end h-1/3">
        <a className="bg-indigo-600 roboto-bold shadow-lg p-2 text-xl rounded-md m-2 text-white">Get Started</a>
        <a className="bg-white text-indigo-600  roboto-bold p-2 shadow-lg text-xl rounded-md m-2">Components</a>
      </div>
    </div>
  );
}
