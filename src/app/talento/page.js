/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { performRequest } from "../../../lib/datocms";

export const metadata = {
    title: "Talento pagina principal",
};

const TALENTO_QUERY = `
    query talento {
        allPerfils {
            link
            nombre
        }
        allAudiovisuals {
            title
            link(markdown: false)
            asset {
                url
            }
        }
    }
`;

export default async function Page() {
    const {
        data: { allPerfils, allAudiovisuals },
    } = await performRequest({ query: TALENTO_QUERY });

    return (
        <main className="pt-16 md:pt-0 md:ml-16 flex md:flex-row h-screen">
            <div className="w-full md:w-64 p-4 bg-red-500 text-black">
                <ul className="text-white text-xl">
                    {allPerfils.map((perfil, index) => {
                        return (
                            <li className="mb-3 hover:italic" key={index}>
                                <Link href={`/talento/${perfil.link}`}>
                                    {perfil.nombre}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ul className="hidden w-full md:flex sm:flex-col md:flex-row flex-wrap overflow-auto">
                    {allAudiovisuals
                        .reverse()
                        .sort(() => Math.random() - 0.5)
                        .map((item, index) => {
                            return (
                                <li key={index}
                                    className="md:w-1/2 flex items-center justify-between"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="relative text-2xl hover:text-3xl cursor-pointer "
                                    >
                                        <img
                                            className="blur-sm grayscale hover:blur-none hover:grayscale-0"
                                            src={`${item.asset.url}`}
                                            alt={`${item.title}`}
                                        />
                                        <span className="absolute blur-none inset-0 top-1/2 bottom-1/2 text-white text-center">
                                            {item.title}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
            </ul>
        </main>
    );
}
