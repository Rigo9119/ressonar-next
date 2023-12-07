/* eslint-disable @next/next/no-img-element */
import React from "react";

const PackItemCard = ({ pack }) => {
    const { lista } = pack;
    const listaRender = lista.split("\n");

    return (
        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4">
            <div className="w-full">
                <div className="mb-4">
                    <img
                        src={pack.imagen.url}
                        alt={pack.titulo}
                        className=""
                    />
                </div>
                <h4 className="text-2xl font-semibold text-red-500 uppercase">
                    {pack.titulo}
                </h4>
            </div>
            <p className="text-justify text-black text-xl my-4">
                {pack.descripcion}
            </p>
            <ul className="hidden md:flex flex-col text-black">
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
