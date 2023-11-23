/* eslint-disable @next/next/no-async-client-component */
import Perfil from "@/components/perfil/perfil";
import { performRequest } from "../../../../lib/datocms";

const PERFIL_QUERY = `
    query perifl($name: String) {
        perfil(filter: {link: {eq: $name}}) {
            nombre
            descripcion
        }
    }
`;

export default async function Page({ params }) {
    const { data: { perfil } } = await performRequest({
        query: PERFIL_QUERY,
        variables: { name: params.talento },
    });

    return (
        <main className="pt-16 md:pt-0 md:ml-16 flex flex-col md:flex-row h-screen">
            <div className="w-full flex flex-col md:flex-row flex-wrap">
                <div className="w-full flex items-center justify-center  bg-red-200 md:w-1/2">
                    Item 1
                </div>
                <div className="w-full flex items-center justify-center  bg-red-300 md:w-1/2">
                    Item 2
                </div>
                <div className="w-full flex items-center justify-center  bg-red-400 md:w-1/2">
                    Item 3
                </div>
                <div className="w-full flex items-center justify-center  bg-red-500 md:w-1/2">
                    Item 4
                </div>
            </div>
            <Perfil perfil={perfil}/>
        </main>
    );
}
