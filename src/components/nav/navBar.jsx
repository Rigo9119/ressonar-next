'use client'
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import HamburguerBtn from "./hamburguerBtn";
import ressonarLogo from "/public/RSS Rojos.png";
import searchIcon from "/public/search-solid.svg"
import NavLinks from './navLinks';
import { SubMenu } from './subMenu';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <nav className="fixed flex sm:flex-row  md:flex-col justify-between items-center w-full md:w-16 md:h-screen bg-gray-200 shadow-md">
                <HamburguerBtn onClick={() => setToggleMenu(!toggleMenu)}/>
                <NavLinks />
                <div className="flex flex-row justify-center items-center py-2 md:order-last">
                    <Link href="/">
                        <Image
                            src={ressonarLogo}
                            alt="Logo de ressonar films"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <button className="px-3 md:px-1">
                    <div className="flex flex-row justify-center items-center md:p-4 md:order-2">
                        <Image
                            src={searchIcon}
                            alt="icono de busqueda"
                            width={25}
                            height={25}
                        />
                    </div>
                </button>
            </nav>
            {toggleMenu ? (<SubMenu />) : null}
        </>
    );
};

export default NavBar;
