import React from "react";

const Clientes = ({ clientes }) => {
    return (
        <section className="flex flex-col gap-8 justify-between items-center md:flex-row lg:px-12 xl:px-24 bg-black">
            <div className="py-4 px-2 p md:p-6 md:w-1/2">
                <h2 className="font-bold text-7xl text-white">Clientes</h2>
                <p className="text-center text-white">
                    Personas que ressonaron con nosotros
                </p>
            </div>
            <div className="flex justify-center items-center bg-green-400 w-full md:w-1/2">
                <ul>
                    <li>Client uno</li>
                    <li>Client dos</li>
                    <li>Client tres</li>
                    <li>Client cuatro</li>
                </ul>
            </div>
        </section>
    );
};

export default Clientes;
