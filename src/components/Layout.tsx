import { Link } from "react-router-dom";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <header className="bg-gray-800 shadow-md sticky top-0 z-30">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-purple-400 font-bold text-xl flex items-center"
              >
                <img
                  src="/images/grow_nostr_initiative-logo.svg"
                  alt="Grow Nostr Initiative"
                  className="h-8 w-auto mr-2"
                />
                Grow Nostr Initiative
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="bg-gray-900 text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Home
                </Link>

                {/* Guides Dropdown */}
                <div className="relative group">
                  <button
                    type="button"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out inline-flex items-center"
                  >
                    <span>Guides</span>
                    <svg
                      className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        to="/get-started"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Get Started
                      </Link>
                      <Link
                        to="/strategy"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Strategy
                      </Link>
                      <Link
                        to="/resources"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Resources
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Case Studies Dropdown */}
                <div className="relative group">
                  <button
                    type="button"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out inline-flex items-center"
                  >
                    <span>Case Studies</span>
                    <svg
                      className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        to="/case-studies"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Overview
                      </Link>
                      <Link
                        to="/fountain"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Fountain App
                      </Link>
                      <Link
                        to="/ainsley-costello"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Ainsley Costello
                      </Link>
                    </div>
                  </div>
                </div>

                {/* GNI Dropdown */}
                <div className="relative group">
                  <button
                    type="button"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out inline-flex items-center"
                  >
                    <span>GNI</span>
                    <svg
                      className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Contact
                      </Link>
                      <Link
                        to="/donate"
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-purple-300"
                      >
                        Donate
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  to="/events"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Events
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "" : "hidden"} bg-gray-800`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="bg-gray-900 text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="mobile-submenu-container">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("guides")}
                className="w-full text-left text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out flex justify-between items-center"
              >
                <span>Guides</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    mobileSubmenuOpen.guides ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              {mobileSubmenuOpen.guides && (
                <div className="mt-1 pl-4 space-y-1">
                  <Link
                    to="/get-started"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/strategy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Strategy
                  </Link>
                  <Link
                    to="/resources"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-submenu-container">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("casestudies")}
                className="w-full text-left text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out flex justify-between items-center"
              >
                <span>Case Studies</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    mobileSubmenuOpen.casestudies ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              {mobileSubmenuOpen.casestudies && (
                <div className="mt-1 pl-4 space-y-1">
                  <Link
                    to="/case-studies"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/fountain"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fountain App
                  </Link>
                  <Link
                    to="/ainsley-costello"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ainsley Costello
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-submenu-container">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("gni")}
                className="w-full text-left text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out flex justify-between items-center"
              >
                <span>GNI</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    mobileSubmenuOpen.gni ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              {mobileSubmenuOpen.gni && (
                <div className="mt-1 pl-4 space-y-1">
                  <Link
                    to="/about"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/donate"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-purple-300 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/events"
              className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full">{children}</main>

      <footer className="bg-gray-800 text-center py-4 mt-auto w-full">
        <p className="text-sm text-gray-500">
          © 2025{" "}
          <a
            href="https://njump.me/npub195t386gf4f67kg58jw6u6jf8vf9xm5ultrzpgm6em3tr8t046l5q6rgwhq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-150 ease-in-out"
          >
            Grow Nostr Initiative
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
