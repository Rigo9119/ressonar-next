"use client";
import Link from "next/link";
import Youtube from "/public/youtube.png";
import Instagram from "/public/instagram.png";
import Facebook from "/public/facebook.png";
import Behance from "/public/behance.png";
import WhatsApp from "/public/whatsapp.png";
import Image from "next/image";

const date = new Date(Date.now()).getFullYear();

const Footer = () => {
    return (
        <footer className="sm:ml-0 md:ml-16 text-center bg-black text-white py-6 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between md:px-8">
                <ul className="flex flex-row md:flex-col md:items-start justify-between gap-2 w-full md:w-1/4 px-8 py-7 md:px-0 md:py-0">
                    <li>
                        <Link href={"/ressonar"}>Ressonar</Link>
                    </li>
                    <li>
                        <Link href={"/audivisual"}>Audivisual</Link>
                    </li>
                    <li>
                        <Link href={"/talento"}>Talento</Link>
                    </li>
                    <li>
                        <Link href={"/contacto"}>Contacto</Link>
                    </li>
                </ul>
                <ul className="flex flex-row items-center justify-between w-full md:w-1/5 px-8 py-7 md:px-0 md:py-0">
                    <li>
                        <a
                            href="https://www.instagram.com/ressonarfilms"
                            target="_blank"
                        >
                            <Image src={Instagram} alt="Instragam icon" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/ressonarfilms/"
                            target="_blank"
                        >
                            <Image src={Facebook} alt="Facebook icon" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@ressonarfilms"
                            target="_blank"
                        >
                            <Image src={Youtube} alt="Youtube icon" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.behance.net/ressonarfilms"
                            target="_blank"
                        >
                            <Image src={Behance} alt="Behance icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/3202071196" target="_blank">
                            <Image src={WhatsApp} alt="WhatsApp icon " />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-center">
                <span>&copy;</span>
                <span>Blytz S.A.S </span>
                <span className="italic">{date}</span>
            </p>
        </footer>
    );
};

export default Footer;
