import React from "react";
import Link from "next/link";


const MobileMenu = () => {
    return (
        <div className="absolute top-16 bg-black text-white h-screen w-full z-10">
            <ul className="p-5 flex flex-col justify-center items-center gap-4 h-full">
                <li className="text-2xl">
                    <Link href="/">
                        Ressonar
                    </Link>
                </li>
                <li className="text-2xl">
                    <Link
                        href="/audiovisual"
                    >
                        Audiovisual
                    </Link>
                </li>
                <li className="text-2xl">
                    <Link href="/talento">
                        Talento
                    </Link>
                </li>
                <li className="text-2xl">
                    <Link href="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu
