import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-transparent text-amber-50 p-4 sm:p-2 w-full">
        <div className="container flex justify-between items-center">
          <h1 className="lg:text-2xl md:text-xl font-bold">My Portfolio</h1>

          {/* Normal Menu (Visible on Large Screens) */}
          <ul className="hidden lg:flex space-x-6">
            <li><a href="#skills" className="hover:text-amber-400">Skills</a></li>
            <li><a href="#project" className="hover:text-amber-400">Project</a></li>
            <li><a href="#experience" className="hover:text-amber-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
          </ul>

          {/* Mobile Menu Button (Visible on Small Screens) */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Sidebar (For Small Screens) */}
      <div className={`fixed inset-0 bg-indigo-950 bg-opacity-90 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}>
        <div className="w-64 h-full  text-white p-5">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
            <X size={30} />
          </button>
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li><a href="#skills" className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#project" className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>Project</a></li>
            <li><a href="#experience" className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#contact" className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
