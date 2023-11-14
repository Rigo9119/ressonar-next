"use client";
const date = new Date(Date.now()).getFullYear();

const Footer = () => {
    return (
        <footer className="ml-16 text-center bg-black text-white py-6">
            <span>&copy;</span>
            <span>Blytz S.A.S </span>
            <span className="italic">{date}</span>
        </footer>
    );
};

export default Footer;
