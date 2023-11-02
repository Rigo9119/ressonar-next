import React from "react";
import Link from "next/link";


export const SubMenu = () => {
    return (
        <div className="pt-20 bg-black text-white h-screen">
            <ul className="p-5">
                <li>
                    <Link href="/ressonar">
                        Ressonar
                    </Link>
                </li>
                <li>
                    <Link
                        href="/audiovisual"
                    >
                        Audiovisual
                    </Link>
                </li>
                <li>
                    <Link href="/talento">
                        Talento
                    </Link>
                </li>

                <li>
                    <Link href="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    );
};
