import Link from "next/link";

const NavLinks = () => {
    const linkClass = "md:rotate-180";
    const linkStyle = { writingMode: "vertical-rl" };
    const wrapperClass =
        "hidden md:flex flex-col justify-between items-center item bg-red h-1/2 md:pt-6";

    return (
        <ul className={wrapperClass}>
            <li>
                <Link style={linkStyle} className={linkClass} href="/ressonar">
                    Ressonar
                </Link>
            </li>
            <li>
                <Link
                    style={linkStyle}
                    className={linkClass}
                    href="/audiovisual"
                >
                    Audiovisual
                </Link>
            </li>
            <li>
                <Link style={linkStyle} className={linkClass} href="/talento">
                    Talento
                </Link>
            </li>

            <li>
                <Link style={linkStyle} className={linkClass} href="/contacto">
                    Contacto
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
