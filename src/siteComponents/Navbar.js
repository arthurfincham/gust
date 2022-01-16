import GustIcon from '../svgs/GustIcon';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  let location = useLocation();

  const navShadow = location.pathname.includes('components') ? 'md:shadow-md' : 'shadow-md';
  return (
    <>
      <nav className={`bg-white w-full h-[50px]  px-4 w-full  flex justify-center ${navShadow} fixed`}>
        <div className="flex items-center w-full navContent">
          <GustIcon svgClass="fill-indigo-600 h-[40px]" />
          <div className="flex justify-end w-full ml-6 space-x-4 ">
            <NavLink exact activeClassName="active" className="mx-2 mt-1 bg-white rounded-md text-md hover:cursor-pointer roboto-black" to="/">
              Home
            </NavLink>

            <NavLink activeClassName="active" className="mx-2 mt-1 bg-white rounded-md text-md hover:cursor-pointer roboto-black" to="/documentation">
              Docs
            </NavLink>

            <NavLink
              activeClassName="active"
              className="hidden mx-2 mt-1 bg-white rounded-md text-md md:block hover:cursor-pointer roboto-black"
              to="/components"
            >
              Components
            </NavLink>

            <NavLink
              activeClassName="active"
              className="mx-2 mt-1 bg-white rounded-md md:hidden text-md hover:cursor-pointer roboto-black"
              to="/components"
            >
              Components
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
