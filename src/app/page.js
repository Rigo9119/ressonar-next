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
        <main>
            <div className="ml-16 h-screen bg-black flex items-center justify-center flex-col">
                <h1 className="text-white montserrat text-6xl mb-12">
                    {heroTittle}
                </h1>
                <p className="text-white text-center w-3/4">{heroParagraph}</p>
            </div>
        </main>
    );
}
