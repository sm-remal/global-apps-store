import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router';
import logoIcon from '../../assets/logo.png';
 
const navigation = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Installation", path: "/installation" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigation.map((item, index) => (
    <Nav key={index} items={item}></Nav>
  ));

  return (
    <nav className="w-full flex justify-between items-center px-5 py-3 border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      {/* Left Section (Logo + Mobile Menu Button) */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-violet-600 hover:bg-violet-100 transition-all duration-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoIcon}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-violet-700">
            Global App Store
          </h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        {links}
      </ul>

      {/* Button */}
      <Link
        to="https://github.com/sm-remal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-700 to-violet-500 text-white hover:from-violet-600 hover:to-violet-400 transition-all duration-300">
          <Github size={18} /> Contribute
        </button>
      </Link>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden absolute left-0 w-full bg-violet-100 text-white font-medium flex flex-col gap-3 py-5 px-6 rounded-b-2xl shadow-lg transform transition-all duration-1000 ${
          open ? "top-[65px] opacity-100" : "-top-[400px] opacity-0"
        }`}
      >
        {links}
        <Link to="https://github.com/sm-remal">
          <button className="flex items-center gap-2 justify-center w-full bg-gradient-to-r from-violet-800 to-violet-500 text-white py-2 rounded-md hover:from-violet-700 hover:to-violet-400 transition-all duration-300">
            <Github size={18} /> Contribute
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
