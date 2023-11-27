/* eslint-disable @next/next/no-img-element */
import React from "react";

const PackItemCard = ({ pack }) => {
    const { lista } = pack;
    const listaRender = lista.split("\n");

    return (
        <div className="flex flex-col justify-between items-start p-4 gap-6 mb-6 md:w-96 md:mb-0 bg-black shadow-2xl rounded-md">
            <div className="w-full">
                <div className="">
                    <img
                        src={pack.imagen.url}
                        alt={pack.titulo}
                        className=""
                    />
                </div>
                <h4 className="text-2xl text-red-500 uppercase">
                    {pack.titulo}
                </h4>
            </div>
            <p className="text-white text-xl">
                {pack.descripcion}
            </p>
            <ul className="hidden md:flex flex-col text-white">
                {listaRender.map((item, index) => (
                    <li key={index} className="pb-2 list-disc ml-4">
                        {item.replace("*", " ")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackItemCard;
