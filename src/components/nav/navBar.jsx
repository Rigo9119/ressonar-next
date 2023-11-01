import Image from "next/image";
import Link from "next/link";
import ressonarLogo from "/public/RSS Rojos.png";

const NavBar = () => {
    const linkClass = "rotate-180";
    const linkStyle = { writingMode: "vertical-rl" };

    return (
        <nav className="fixed w-auto bg-white h-24 shadow-xl">
            <div className="flex-col justify-between item bg-red">
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
            <div className="flex">
                <Link href="/">
                    <Image
                        src={ressonarLogo}
                        alt="Logo de ressonar films"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
