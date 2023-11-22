/* eslint-disable @next/next/no-img-element */
import { performRequest } from "../../../lib/datocms";

export const metadata = {
    title: "Audiovisual",
};

const AUDIOVISUAL_QUERY = `
    query audiovisual {
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
        data: { allAudiovisuals },
    } = await performRequest({ query: AUDIOVISUAL_QUERY });

    return (
        <main className="pt-16 md:ml-16 md:pt-0">
            <div className="flex flex-wrap w-auto items-center justify-between">
                {allAudiovisuals.reverse().map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="relative w-1/2"
                        >
                            <img
                                className="blur-sm hover:blur-none"
                                src={`${item.asset.url}`}
                                alt={`${item.title}`}
                            />
                            <span className="absolute bottom-1/2 left-1/2 text-4xl text-white">
                                {item.title}
                            </span>
                        </a>
                    );
                })}
            </div>
        </main>
    );
}
