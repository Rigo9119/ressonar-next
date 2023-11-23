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
            <div className="w-full hidden md:flex sm:flex-col md:flex-row flex-wrap">
            <div className="flex flex-col flex-nowrap w-full items-center justify-between md:flex-row md:flex-wrap md:w-auto">
                {allAudiovisuals.reverse().map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="relative md:w-1/2 text-2xl hover:text-4xl cursor-pointer "
                        >
                            <img
                                className="blur-sm hover:blur-none"
                                src={`${item.asset.url}`}
                                alt={`${item.title}`}
                            />
                            <span className="absolute blur-none inset-0 top-1/2 bottom-1/2 text-white text-center">
                                {item.title}
                            </span>
                        </a>
                    );
                })}
            </div>
            </div>
        </main>
    );
}
