import React from "react";

const HamburguerBtn = ({ onClick }) => {
    const spanClass = 'block w-8 h-1 bg-black'

    return (
        <button onClick={onClick} className="flex flex-col px-3 gap-1  bg-gray rounded md:hidden ">
            <span className={spanClass}></span>
            <span className={spanClass}></span>
            <span className={spanClass}></span>
        </button>
    );
};

export default HamburguerBtn;
