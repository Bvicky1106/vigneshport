import AppsIcon from '@mui/icons-material/Apps';
import { Hidden } from '@mui/material';
import { useState } from 'react';

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-4 bg-primary">
        <a  className="font-bold text-black" href="#">VIGNESH</a>
        <nav className="hidden md:block">
            <ul className="flex text-black">
                <li><a href="/">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#contact">Contact</a> </li>
                <li><a href="#resume">Resume</a> </li>
                <li><a href="#projects">Projects</a> </li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden mobile-nav">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-black">
                <li><a href="#">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#contact">Contact</a> </li>
                <li><a href="#projects">Projects</a> </li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>< AppsIcon className="text-white h-3" /></button>

    </header>
}