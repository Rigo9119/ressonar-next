'use client'
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import HamburguerBtn from "./hamburguerBtn";
import ressonarLogo from "/public/RSS Rojos.png";
import searchIcon from "/public/search-solid.svg"
import NavLinks from './navLinks';
import MobileMenu from './mobileMenu';


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
            </nav>
            {toggleMenu ? (<MobileMenu />) : null}
        </>
    );
};

export default NavBar;
