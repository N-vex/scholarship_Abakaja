import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-blue-400">
        <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b dark:border-blue  -600">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-5">
            <a
              href="/"
              className="flex items-center rtl:space-x-reverse"
            >
              <span className="flex items-center md:space-x-1">
                <img 
                  src="/assets/logo01.png" 
                  className="h-8 md:h-10 transform md:scale-191" 
                  alt="Logo" 
                />
                <img 
                  src="/assets/Logo33.png" 
                  className="hidden md:block h-8 md:h-10" 
                  alt="Logo 2"
                />
              </span>
            </a>
            {/* Mobile toggle button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Collapsible Menu */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } items-center justify-between w-full md:flex md:w-auto`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg b md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-white md:text-white hover:border-blue-500 md:dark:text-blue-500"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      }`
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/scholarships"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      }`
                    }
                  >
                    Scholarships
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                        <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                {({ isActive }) => (
                  <Button
                    className={`
                      flex items-center gap-2 px-4 py-2 
                      rounded-md transition-colors
                      ${
                        isActive
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white"
                      }
                    `}
                  >
                    <Shield className="w-4 h-4" />
                    Admin Panel
                  </Button>
                )}
              </NavLink>



                {/* Donate Button moved inside */}
                <li className="mt-2 md:mt-0">
                  <NavLink to="/donation" onClick={() => setIsMenuOpen(false)}>
                  <button
                    type="button"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Donate
                  </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
