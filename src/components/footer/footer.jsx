"use client";
const date = new Date(Date.now()).getFullYear();

const Footer = () => {
    return (
        <footer className="ml-16 text-center bg-black text-white py-6">
            Creado por Blytz S.A.S {date}
        </footer>
    );
};

export default Footer;
