"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-300 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          MySite
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-indigo-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block hover:text-indigo-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
