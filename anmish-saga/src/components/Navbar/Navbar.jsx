import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Products", link: "#" },
  { id: 3, name: "Pricing", link: "#" },
  { id: 4, name: "Contact", link: "#" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-50 text-black dark:text-white duration-300">
      <div className="container mx-auto py-2 md:py-0 px-4">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-14" />
            <p className="text-2xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>
          {/* Desktop menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-all duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-3xl"
                />
              ) : (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-3xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
