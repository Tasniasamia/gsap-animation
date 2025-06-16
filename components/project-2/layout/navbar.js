import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="container ">
      <nav className="px-6 lg:px-12 py-4 mx-auto fixed top-0 z-50    text-white">
        <div className="grid grid-cols-3 items-center">
     
          <div>
            <Link href="/" className="text-2xl font-bold logo">Eraf</Link>
          </div>

          <ul className="hidden md:flex justify-center gap-12 text-sm font-medium">
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Works</Link></li>
            <li><Link href="/">Casting</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>

          <div className="text-right uppercase text-sm font-medium">
            Instagram
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
