import React from "react";

const HamburguerBtn = ({ onClick }) => {
    const spanClass = 'block w-8 h-1 bg-black'

    return (
        <button onClick={onClick} className="md:hidden sm:flex px-3 space-y-1.5 bg-gray rounded">
            <span className={spanClass}></span>
            <span className={spanClass}></span>
            <span className={spanClass}></span>
        </button>
    );
};

export default HamburguerBtn;
