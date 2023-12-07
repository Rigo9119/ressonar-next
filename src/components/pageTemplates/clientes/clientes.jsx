"use client";
import { Image as DatoImage } from "react-datocms/image";

const Clientes = ({ clientes }) => {
    const { logos } = clientes[0];

    return (
        <section className="flex flex-col gap-8 justify-between items-center bg-black w-full">
            <div className="py-4 px-2 p md:p-6 md:w-1/2 text-white">
                <h2 className="font-bold text-center text-7xl">Clientes</h2>
                <p className="text-center">
                    Personas que ressonaron con nosotros
                </p>
            </div>
            <div className="flex items-center justify-center bg-black">
                <ul className="flex flex-row flex-wrap justify-center items-center bg-black w-5/6 ">
                    {logos?.map((logo, index) => {
                        return (
                            <li className="w-1/6" key={index}>
                                <DatoImage data={logo.responsiveImage} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Clientes;
