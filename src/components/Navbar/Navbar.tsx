import { Link } from 'react-router-dom';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import icon from "../../assets/icon.png";
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", to: "/", current: false },
    { name: "About", to: "/about", current: false },
    { name: "Resume", to: "/resume", current: false },
    // { name: "Calendar", to: "/calendar", current: false },
  ]);

  const updateNavigation = (to: string) => {
    const updatedNavigation = navigation.map(item => {
      return {
        ...item,
        current: item.to === to
      };
    });
    setNavigation(updatedNavigation);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <img src={icon} alt="" className="h-2/4 ml-10" />
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Link Navbar */}
              <div className="flex flex-1 justify-center sm:justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`${
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } px-3 py-2 text-sm font-medium rounded-md`}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => updateNavigation(item.to)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Mobile Menu */}
          <Disclosure.Panel className="sm:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 w-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`${
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } block px-3 py-2 text-base font-medium rounded-md`}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => updateNavigation(item.to)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
