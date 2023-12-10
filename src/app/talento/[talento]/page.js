/* eslint-disable @next/next/no-async-client-component */
import Perfil from "@/components/perfil/perfil";
import { performRequest } from "../../../../lib/datocms";
import ImagesGrid from "@/components/grids/imagesGrid";

export const metadata = {
    title: "Ressonar | Talento",
    description: "Ressonar films | Pagina general de talento"
};

const PERFIL_QUERY = `
    query perifl($name: String) {
        perfil(filter: {link: {eq: $name}}) {
            nombre
            descripcion
            trabajoImg {
                responsiveImage {
                    src
                    aspectRatio
                    alt
                    height
                    sizes
                    width
                    title
                    webpSrcSet
                }
                url
                customData
            }
        }
    }
`;

export default async function Page({ params }) {
    const { data: { perfil } } = await performRequest({
        query: PERFIL_QUERY,
        variables: { name: params.talento },
    });

    return (
        <main className="pt-16 md:pt-0 md:ml-16 flex flex-col md:flex-row h-screen bg-black">
            <ImagesGrid imagenes={perfil.trabajoImg} />
            <Perfil perfil={perfil}/>
        </main>
    );
}
