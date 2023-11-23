import PackItemCard from "@/components/cards/packItemCard";
import { performRequest } from "../../lib/datocms";

export const metadata = {
    title: "Ressonar | Inicio",
    description:
        "Ressonar films | Ressonar es una forma de vivir interactuar y crear. Somos una productora audiovisual, creamos piezas y experiencias que te hacen vibrar con su energia.",
};

const HERO_QUERY = `
    query hero {
        hero {
            heroTittle
            heroParagraph
        }
    }
`;

export default async function Home() {
    const {
        data: {
            hero: { heroTittle, heroParagraph },
        },
    } = await performRequest({ query: HERO_QUERY });

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
            <section className="flex flex-col md:flex-row gap-8 justify-between items-center md:w-screen lg:px-12 xl:px-24">
                <div className="md:w-1/2 p-4">
                    <h2 className="font-bold text-4xl mb-4 text-center md:text-7xl md:text-start">
                        Lo que hacemos
                    </h2>
                    <p className="text-justify">
                        Desarrollamos todo el proceso audiovisual, desde la
                        escritura de guion y conceptualización, preproducción,
                        filmación y postproducción. Traemos a la vida aquello
                        que aún está por contar.
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/2 bg-green-400">
                    <span>Imagen</span>
                </div>
            </section>
            <section className="p-4 flex flex-col justify-around items-center h-auto bg-gray-600 md:py-20 md:px-4 md:flex-row">
                <PackItemCard />
                <PackItemCard />
                <PackItemCard />
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
