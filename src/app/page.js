import PackItemCard from "@/components/cards/packItemCard";
import { performRequest } from "../../lib/datocms";

export const metadata = {
    title: "Inicio",
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
        <main className="ml-16">
            <section className="h-screen bg-black flex items-center justify-center flex-col">
                <h1 className="text-white text-6xl mb-12">
                    {heroTittle}
                </h1>
                <p className="text-white text-xl text-center w-3/4">
                    {heroParagraph}
                </p>
            </section>
            <section className="flex flex-row gap-8 justify-between items-center lg:px-12 xl:px-24">
                <div className="w-1/2 p-4">
                    <h2 className="font-bold text-7xl mb-4">
                        Lo que hacemos
                    </h2>
                    <p className="text-justify">
                        Desarrollamos todo el proceso audiovisual, desde la escritura de guion y conceptualización, preproducción, filmación y postproducción.

                        Traemos a la vida aquello que aún está por contar.
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/2 bg-green-400">
                    <span>Imagen</span>
                </div>
            </section>
            <section className="px-4 py-20 flex flex-row justify-around items-center h-auto bg-gray-600">
                <PackItemCard />
                <PackItemCard />
                <PackItemCard />
            </section>
            <section className="flex flex-row gap-8 justify-between items-center lg:px-12 xl:px-24">
                <div className="w-1/2 p-6">
                    <h2 className="font-bold text-7xl">
                        Clientes
                    </h2>
                    <p>
                        Personas que ressonaron con nosotros
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/2 bg-green-400">
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
