import Link from "next/link";

const SubMenu = ({ toggle }) => {
    const linkClass = "md:rotate-180";
    const linkStyle = { writingMode: "vertical-rl" };
    const wrapperClass = `${toggle ? 'hidden' : 'flex'} "md:flex flex-col justify-between items-center item bg-red h-1/2 md:pt-6"`
    console.log(toggle);
    return (
        <div className={wrapperClass}>
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
    );
};

export default SubMenu;
