/* eslint-disable @next/next/no-img-element */
import PackItemCard from "@/components/cards/packItemCard";
import { performRequest } from "../../lib/datocms";

export const metadata = {
    title: "Ressonar | Inicio",
    description:
        "Ressonar films | Ressonar es una forma de vivir interactuar y crear. Somos una productora audiovisual, creamos piezas y experiencias que te hacen vibrar con su energia.",
};

const RESSONAR_QUERY = `
    query hero {
        hero {
            heroTittle
            heroParagraph
        }
        ressonar {
            parrafo
            titulo
            textoBoton
            imagen {
                url
            }
        }
        allPacks {
            descripcion
            lista
            titulo
            imagen {
                url
            }
        }
    }
`;

export default async function Home() {
    const {
        data: {
            hero: { heroTittle, heroParagraph },
            ressonar,
            allPacks,
        },
    } = await performRequest({ query: RESSONAR_QUERY });

    return (
        <main className="w-screen pt-16 md:ml-16 md:pt-0">
            <section className="sm:flex-col flex items-center justify-center flex-col h-screen bg-black">
                <h1 className="text-white text-center w-full text-6xl mb-12">
                    {heroTittle}
                </h1>
                <p className="text-white text-xl text-center w-3/4">
                    {heroParagraph}
                </p>
            </section>
            <section className="flex flex-col gap-8 justify-between items-center md:w-screen ">
                <div className="flex flex-col items-center justify-center md:justify-between md:flex-row md:w-full md:gap-12 p-4">
                    <div className="w-1/2">
                        <h2 className="font-bold text-4xl mb-4 text-center md:text-7xl md:text-start">
                            {ressonar.titulo}
                        </h2>
                        <p className="text-justify">{ressonar.parrafo}</p>
                    </div>
                    <div className="w-1/2">
                        <img src={ressonar.imagen.url} alt={ressonar.titulo} />
                    </div>
                </div>
                <a
                    target="_blank"
                    className="cursor-pointer p-5 mb-5 rounded-se-xl rounded-bl-xl bg-red-500 text-white hover:shadow-2xl"
                >
                    {ressonar.textoBoton}
                </a>
            </section>
            <section className="p-4 flex flex-col justify-around items-center h-auto bg-gray-600 md:flex md:py-20 md:px-4 md:flex-col gap-4 md:flex-wrap md:w-screen">
                <h2 className="font-bold text-7xl">
                    Packs
                </h2>
                <div className="flex flex-row px-4 items-start justify-between gap-6">
                    {allPacks.map((pack, index) => (
                        <PackItemCard pack={pack} key={index} />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-8 justify-between items-center md:flex-row lg:px-12 xl:px-24">
                <div className="py-4 px-2 p md:p-6 md:w-1/2">
                    <h2 className="font-bold text-7xl">Clientes</h2>
                    <p className="text-center">
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
        </main>
    );
}
