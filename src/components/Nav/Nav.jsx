import React from 'react';
import { NavLink } from 'react-router';

const Nav = ({ items }) => {
  return (
    <li>
      <NavLink
        to={items.path}
        className={({ isActive }) =>
          `cursor-pointer py-2 px-3 rounded-sm duration-300 
          ${isActive 
            ? "bg-gradient-to-r from-violet-700  to-violet-500 text-white font-semibold" 
            : "hover:border-1 border-violet-700 hover:bg-violet-200 text-gray-800"}`}>
        {items.name}
      </NavLink>
    </li>
  );
};

export default Nav;
