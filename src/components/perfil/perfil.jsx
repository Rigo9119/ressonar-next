"use client";
import { useState } from "react";
import Link from "next/link";

const Perfil = () => {
    const [toggle, setToggle] = useState(true);
    const handletoggle = () => setToggle(!toggle);

    return (
        <>
            {toggle ? (
                <div className="order-first w-full p-4 bg-red-500 text-black flex flex-col gap-4 md:w-1/4 md:order-last">
                    <div className="flex flex-col gap-4 justify-around items-center md:items-start md:h-3/4">
                        <h3 className="text-white uppercase">
                            Nombre de persona
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus quam magnam vel omnis itaque
                            molestiae neque consequuntur labore beatae expedita
                            porro inventore suscipit, eius officia ab adipisci
                            vitae molestias tenetur!
                        </p>
                        <div>
                            <p className="pb-4">
                                Sigue a Nombre de persona en sus redes
                            </p>
                            <ul>
                                <li>red social uno</li>
                                <li>red social uno</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full h-1/4">
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
                    className="hidden md:flex flex-row items-center justify-center px-3 text-lg bg-red-500 text-white"
                >
                    Nombre de la persona
                </button>
            )}
        </>
    );
};

export default Perfil;
