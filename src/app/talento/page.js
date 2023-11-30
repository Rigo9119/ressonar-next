/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { performRequest } from "../../../lib/datocms";
import AudiovosualGrid from "@/components/grids/audiovosualGrid";

export const metadata = {
    title: "Ressonar | Talento",
    description: "Ressonar films | Pagina general de talento"
};

const TALENTO_QUERY = `
    query talento {
        allPerfils {
            link
            nombre
        }
        allAudiovisuals {
            link
            title
            assetVideo {
              video {
                mp4Url
              }
            }
            asset {
              url
              title
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
                <AudiovosualGrid videos={allAudiovisuals}/>
            </ul>
        </main>
    );
}
