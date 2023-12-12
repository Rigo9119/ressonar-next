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

    const onHandleClick = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav className="fixed flex flex-row  md:flex-col justify-between items-center w-full bg-gray-200 shadow-md md:h-screen md:w-16">
                <HamburguerBtn onClick={() => setToggleMenu(!toggleMenu)}/>
                <NavLinks />
                <div className="flex flex-row justify-center items-center py-2 pr-2 md:pr-0 md:order-last">
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
            {toggleMenu ? (<MobileMenu onClick={onHandleClick}/>) : null}
        </>
    );
};

export default NavBar;
