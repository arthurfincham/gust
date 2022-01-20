import GustIcon from '../svgs/GustIcon';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  let location = useLocation();

  const navShadow = location.pathname.includes('components') || location.pathname.includes('documentation') ? 'md:shadow-md' : 'shadow-md';
  return (
    <>
      <nav className={`bg-white w-full h-[50px]  px-4 w-full  flex justify-center ${navShadow} fixed`} data-testid="navigation">
        <div className="flex items-center w-full navContent">
          <GustIcon svgClass="fill-primary-600 h-[40px]" />
          <div className="flex justify-end w-full ml-6 space-x-4 ">
            <NavLink activeclassname="active" className="mx-2 mt-1 bg-white rounded-md text-md hover:cursor-pointer font-sans-bb" to="/">
              Home
            </NavLink>

            <NavLink activeclassname="active" className="mx-2 mt-1 bg-white rounded-md text-md hover:cursor-pointer font-sans-bb" to="/documentation">
              Docs
            </NavLink>

            <NavLink
              activeclassname="active"
              className="hidden mx-2 mt-1 bg-white rounded-md text-md md:block hover:cursor-pointer font-sans-bb"
              to="/components"
            >
              Components
            </NavLink>

            <NavLink
              activeclassname="active"
              className="mx-2 mt-1 bg-white rounded-md md:hidden text-md hover:cursor-pointer font-sans-bb"
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
