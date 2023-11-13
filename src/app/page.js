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
            <div className="h-screen bg-black flex items-center justify-center flex-col">
                <h1 className="text-white text-6xl mb-12">
                    {heroTittle}
                </h1>
                <p className="text-white text-xl text-center w-3/4">
                    {heroParagraph}
                </p>
            </div>
            <section className="px-4 py-20 flex flex-row justify-around items-center h-auto bg-gray-600">
                <PackItemCard />
                <PackItemCard />
                <PackItemCard />
            </section>
            <section>
                <h2>
                    Lo que hacemos
                </h2>
            </section>
            <section>
                <h2>
                    Clientes
                </h2>
            </section>
        </main>
    );
}
