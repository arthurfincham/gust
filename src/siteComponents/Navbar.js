import GustIcon from '../svgs/GustIcon';

export default function Navbar({ isClosed, setIsClosed }) {
  return (
    <>
      <nav className="bg-white w-full h-[50px] flex items-center px-4  border-b-[.05em] fixed">
        <GustIcon svgClass="fill-indigo-600 h-[40px]" />
        <div className="flex ml-6 space-x-4">
          <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/">
            Home
          </a>
          <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/components">
            Components
          </a>
          <a className="px-1 m-2 text-lg bg-white rounded-md hover:cursor-pointer roboto-bold" href="/set-up">
            Set Up
          </a>
          <button
            onClick={() => setIsClosed(!isClosed)}
            type="button"
            className="inline-flex items-center justify-center p-1 rounded-md dark:fill-white hover:bg-gray-100 dark:hover:fill-white hover-bg-blue-gradient "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            TOG
          </button>
        </div>
      </nav>
    </>
  );
}
