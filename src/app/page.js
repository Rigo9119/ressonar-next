/* eslint-disable @next/next/no-img-element */
import { Image as DatoImage } from "react-datocms";
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
                responsiveImage(imgixParams: { w: 500, h: 300, auto: format }) {
                    sizes
                    src
                    width
                    height
                    alt
                    title
                    base64
                }
                url
            }
        }
        allPacks {
            descripcion
            lista
            titulo
            imagen {
                responsiveImage {
                    src
                    title
                    alt
                }
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
    const { parrafo } = ressonar;
    const parrafoArr = parrafo.split("\n");

    return (
        <main className="w-full pt-16 md:ml-16 md:pt-0">
            <section className="sm:flex-col flex items-center justify-center flex-col h-screen bg-black">
                <h1 className="text-white text-center w-full text-6xl mb-12">
                    {heroTittle}
                </h1>
                <p className="text-white text-xl text-center w-3/4">
                    {heroParagraph}
                </p>
            </section>
            <section className="bg-black">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-3 p-4">
                    <div className="flex flex-col w-1/2 items-center justify-center gap-6">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-4xl mb-4 text-center md:text-7xl md:text-start text-white">
                                {ressonar.titulo}
                            </h2>
                            {parrafoArr.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="text-justify text-white pb-2"
                                    >
                                        {item.replace("*", " ")}
                                    </p>
                                );
                            })}
                        </div>
                        <a
                            target="_blank"
                            className="align-middle cursor-pointer p-5 mb-5 rounded-se-xl rounded-bl-xl bg-red-500 text-white hover:shadow-2xl w-fit"
                        >
                            {ressonar.textoBoton}
                        </a>
                    </div>
                    <div className="w-auto">
                        <DatoImage
                            data={ressonar.imagen.responsiveImage}
                        />
                    </div>
                </div>
            </section>
            <section className="p-4 flex flex-col justify-around items-center h-auto md:flex md:py-12 md:px-8 md:flex-col gap-4 md:flex-wrap ">
                <h2 className="font-bold text-7xl">Packs</h2>
                <div className="flex flex-row items-start justify-between gap-6 overflow-x-hidden w-fit">
                    {allPacks.map((pack, index) => (
                        <PackItemCard pack={pack} key={index} />
                    ))}
                </div>
            </section>
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
        </main>
    );
}
