"use client";
import React from "react";

const Clientes = ({ clientes }) => {
    const { logos } = clientes[0];

    return (
        <section className="flex flex-col gap-8 justify-between items-center bg-white">
            <div className="py-4 px-2 p md:p-6 md:w-1/2">
                <h2 className="font-bold text-7xl text-black">Clientes</h2>
                <p className="text-center text-black">
                    Personas que ressonaron con nosotros
                </p>
            </div>
            <ul className="flex flex-row flex-wrap justify-center items-center bg-black w-full">
                {logos?.map((logo, index) => {
                    return (
                        <li key={index}>
                            <img src={logo.responsiveImage.src} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Clientes;
