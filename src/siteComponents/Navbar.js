import GustIcon from '../svgs/GustIcon';

export default function Navbar({ isClosed, setIsClosed }) {
  return (
    <>
      <nav className="bg-white w-full h-[50px]  px-4 w-full  flex justify-center shadow-md fixed">
        <div className="flex items-center w-full navContent">
          <GustIcon svgClass="fill-indigo-600 h-[40px]" />
          <div className="flex justify-end w-full ml-6 space-x-4 ">
            <a className="px-1 m-2 bg-white rounded-md text-md hover:cursor-pointer roboto-regular" href="/">
              Home
            </a>

            <a className="px-1 m-2 bg-white rounded-md text-md hover:cursor-pointer roboto-regular" href="/set-up">
              Set Up
            </a>
            <a className="hidden px-1 m-2 bg-white rounded-md md:block text-md hover:cursor-pointer roboto-regular" href="/components">
              Components
            </a>
            <button
              onClick={() => setIsClosed(!isClosed)}
              type="button"
              className="px-1 m-2 bg-white rounded-md md:hidden text-md hover:cursor-pointer roboto-regular "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              Components
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
