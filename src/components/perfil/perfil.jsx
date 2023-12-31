"use client";
import { useState } from "react";
import Link from "next/link";

const Perfil = ({ perfil }) => {
    const [toggle, setToggle] = useState(true);
    const handletoggle = () => setToggle(!toggle);

    return (
        <>
            {toggle ? (
                <div className="order-first w-full p-4 bg-red-500 text-black flex flex-col justify-between gap-4 md:w-1/4 md:order-last">
                    <div className="flex flex-col gap-4 justify-around items-center md:items-start">
                        <h3 className="text-white uppercase">
                            {perfil.nombre}
                        </h3>
                        <p>
                            {perfil.descripcion}
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <Link className="text-xl" href="/talento">Volver</Link>
                        <button className="hidden md:flex" onClick={handletoggle}>
                            <span className="text-white text-xl">&rarr;</span>
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={handletoggle}
                    style={{ writingMode: "vertical-rl" }}
                    className="hidden md:flex flex-row items-center justify-center px-3 text-lg bg-red-500 text-white uppercase"
                >
                    {perfil.nombre}
                </button>
            )}
        </>
    );
};

export default Perfil;
