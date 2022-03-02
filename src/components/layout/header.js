import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Cart, closeIcon, hamburgerIcon } from "../../utils/icon";
import { ProductContext } from "../../utils/productContext";
import CustomLink from "./customLink";

const Header = () => {
  const [link, setLink] = useState(true);
  const down = () => {
    setLink(!link);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={down}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {link && hamburgerIcon}
                {!link && closeIcon}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Logo />
              <Navigations />
            </div>
            <RightActions />
          </div>
        </div>

        {!link && <MobileMenu />}
      </nav>
    </>
  );
};

// className="block lg:hidden h-8 w-auto"
// className="hidden lg:block h-8 w-auto"

function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        alt="Workflow"
      />
    </div>
  );
}

function Navigations() {
  return (
    <div className="hidden sm:block sm:ml-6 items-center  ">
      <div className="flex  space-x-4">
        <CustomLink
          to="/"
          className=" text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Home
        </CustomLink>

        <CustomLink
          to="/about"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </CustomLink>
      </div>
    </div>
  );
}

function RightActions() {
  const { cartStadions } = useContext(ProductContext);

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">View notifications</span>
        <Link to={"/cart"}>
          <span class="relative inline-block">
            {Cart}
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {cartStadions.length}
            </span>
          </span>
        </Link>
      </button>

      <div className="ml-3 relative">
        <div>
          <button
            onMouseEnter={() => {
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setIsVisible(false);
            }}
            type="button"
            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 bg-white rounded-full"
              src="https://visualpharm.com/assets/908/User-595b40b85ba036ed117dc597.svg"
            />
            {isVisible && <ProfileMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileMenu() {
  return (
    <div
      className="origin-top-right absolute right-0 mt-8 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      <Link
        to={"/user"}
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-0"
      >
        Your Profile
      </Link>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Header;
