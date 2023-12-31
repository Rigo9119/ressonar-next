import AudiovosualGrid from "@/components/grids/audiovosualGrid";
/* eslint-disable @next/next/no-img-element */
import { performRequest } from "../../../lib/datocms";

export const metadata = {
    title: "Ressonar | Audiovisual",
    description: "Ressonar films | Pagina de trabajo audiovisual",
};

const AUDIOVISUAL_QUERY = `
query allAudiovisuals {
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
        data: { allAudiovisuals },
    } = await performRequest({ query: AUDIOVISUAL_QUERY });

    return (
        <main className="pt-16 md:ml-16 md:pt-0 bg-black">
            <AudiovosualGrid videos={allAudiovisuals} />
        </main>
    );
}
