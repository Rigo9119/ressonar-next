"use client";
import Link from "next/link";

const Perfil = () => {
    return (
        <div className="w-1/4 p-4 bg-red-500 text-black flex flex-col ">
            <div className="flex flex-col justify-around items-start h-3/4">
                <h3 className="text-white uppercase">
                    Nombre de persona
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quam magnam vel omnis itaque molestiae neque
                    consequuntur labore beatae expedita porro inventore
                    suscipit, eius officia ab adipisci vitae molestias tenetur!
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
            <div className="h-1/4">
                <Link href='/talento'>Volver</Link>
            </div>
        </div>
    );
};

export default Perfil;
