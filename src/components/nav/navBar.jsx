import Image from "next/image";
import Link from "next/link";
import HamburguerBtn from "./hamburguerBtn";
import ressonarLogo from "/public/RSS Rojos.png";
import searchIcon from "/public/search-solid.svg"

const NavBar = () => {
    const linkClass = "md:rotate-180";
    const linkStyle = { writingMode: "vertical-rl" };

    return (
        <nav className="fixed flex sm:flex-row  md:flex-col justify-between items-center w-full md:w-16 md:h-screen bg-gray-200 shadow-md">
            <HamburguerBtn />
            <div className="hidden md:flex flex-col justify-between items-center item bg-red h-1/2 md:pt-6">
                <ul>
                    <li>
                        <Link
                            style={linkStyle}
                            className={linkClass}
                            href="/ressonar"
                        >
                            Ressonar
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            style={linkStyle}
                            className={linkClass}
                            href="/audiovisual"
                        >
                            Audiovisual
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            style={linkStyle}
                            className={linkClass}
                            href="/talento"
                        >
                            Talento
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            style={linkStyle}
                            className={linkClass}
                            href="/contacto"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row justify-center items-center py-3">
                <Link href="/">
                    <Image
                        src={ressonarLogo}
                        alt="Logo de ressonar films"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
            <button>
                <div className="flex flex-row justify-center items-center sm:px-3 md:p-4">
                    <Image
                        src={searchIcon}
                        alt="icono de busqueda"
                        width={30}
                        height={30}
                    />
                </div>
            </button>
        </nav>
    );
};

export default NavBar;
