import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { Github } from 'lucide-react';
import logoIcon from '../../assets/logo.png'



const navigations = [
    { name: "Home", path: "/" },
    { name: "apps", path: "/apps" },
    { name: "installation", path: "/installation" },

];


const Navbar = () => {

    const links = navigations.map((items, index) => <Nav key={index} items={items} ></Nav>)

    const [open, setOpen] = useState(false)


    return (
        <nav className='w-full flex justify-between items-center px-5 py-3 border-b-2 border-gray-200'>

            <span className='flex gap-3'>
                <span onClick={() => setOpen(!open)}>
                    {
                        open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                    }
                </span>

                <ul className={`md:hidden absolute duration-1000
                    ${open ? "top-14" : "-top-56"}
                    bg-blue-500 p-3 rounded-sm text-white`}>
                    {links}
                </ul>

                <div className='flex gap-2'>
                    <img src={logoIcon} alt="Logo" className='w-[35px] h-[35px]' />
                    <h2 className='text-base md:text-lg lg:text-xl font-bold'>Global App Store</h2>
                </div>
            </span>
            <ul className='md:flex gap-4 hidden'>
                {
                    links
                }
            </ul>
            <Link to="https://github.com/sm-remal"><button className='btn bg-gradient-to-r from-violet-700 to-violet-500 text-white'><Github /> Contribute</button></Link>
        </nav>
    );
};

export default Navbar;