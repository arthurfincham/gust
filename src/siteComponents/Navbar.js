import GustIcon from '../svgs/GustIcon';

export default function Navbar() {
  return (
    <nav className="bg-white w-full h-[50px] flex items-center px-4  shadow-md">
      <GustIcon svgClass="fill-indigo-600 h-[40px]" />
      <div className="flex ml-6 space-x-4">
        <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/">
          Home
        </a>
        <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/components">
          Components
        </a>
        <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/navbars">
          Navbars
        </a>
        <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/cards">
          Cards
        </a>
        <span className="bg-indigo-900 h-[40px]"></span>
      </div>
    </nav>
  );
}
