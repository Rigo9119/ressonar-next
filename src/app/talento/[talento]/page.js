import Perfil from "@/components/perfil/perfil";

export default function Page() {
    return (
        <main>
            <Perfil />
            <div className="w-3/4 flex flex-row flex-wrap">
                <div className="w-1/2 flex items-center justify-center  bg-red-200">
                    Item 1
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-red-300">
                    Item 2
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-red-400">
                    Item 3
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-red-500">
                    Item 4
                </div>
            </div>
        </main>
    )
}
