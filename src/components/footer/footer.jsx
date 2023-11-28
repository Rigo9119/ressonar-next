"use client";
const date = new Date(Date.now()).getFullYear();

const Footer = () => {
    return (
        <footer className="sm:ml-0 md:ml-16 text-center bg-black text-white py-6 w-full">
            <p className="text-center">
                <span>&copy;</span>
                <span>Blytz S.A.S </span>
                <span className="italic">{date}</span>
            </p>
        </footer>
    );
};

export default Footer;
