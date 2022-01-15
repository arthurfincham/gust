import GustIcon from '../svgs/GustIcon';

export default function Navbar() {
  return (
    <nav className="bg-white w-full h-[50px] flex items-center px-4">
      <GustIcon svgClass="fill-indigo-600 h-[40px]" />
      <div className="flex ml-6 space-x-2">
        <a className="bg-white hover:cursor-pointer	roboto-bold px-1 text-lg rounded-md  m-2" href="/">
          Home
        </a>
        <a className="bg-white hover:cursor-pointer	roboto-bold px-1 text-lg rounded-md  m-2" href="/components">
          Components
        </a>
      </div>
    </nav>
  );
}
