/* eslint-disable @next/next/no-img-element */
import { performRequest } from "../../lib/datocms";
import Hero from "@/components/hero/hero";
import Clientes from "@/components/pageTemplates/clientes/clientes";
import LoQueHacemos from "@/components/pageTemplates/loQueHacemos/loQueHacemos";
import Packs from "@/components/pageTemplates/packs/packs";
import { RESSONAR_QUERY } from "./homeQuery";

export const metadata = {
    title: "Ressonar | Inicio",
    description:
        "Ressonar films | Ressonar es una forma de vivir interactuar y crear. Somos una productora audiovisual, creamos piezas y experiencias que te hacen vibrar con su energia.",
};

export default async function Home() {
    const {
        data: {
            hero,
            ressonar,
            allPacks,
            allClientLogos
        },
    } = await performRequest({ query: RESSONAR_QUERY });


    return (
        <main className="w-full pt-16 md:ml-16 md:pt-0">
            <Hero hero={hero}/>
            <LoQueHacemos ressonar={ressonar} />
            <Packs packs={allPacks}/>
            <Clientes clientes={allClientLogos}/>
        </main>
    );
}
