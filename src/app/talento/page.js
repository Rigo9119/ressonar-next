import Link from "next/link";

export const metadata = {
    title: "Talento pagina principal",
};

export default function Page() {
    return (
        <main className="pt-16 md:pt-0 md:ml-16 flex md:flex-row h-screen">
            <div className="w-full md:w-64 p-4 bg-red-500 text-black">
                <ul className="text-white text-xl">
                    <li className="mb-3 hover:italic">
                        <Link href="/talento/person-uno">Persona uno</Link>
                    </li>
                    <li className="mb-3 hover:italic">
                        <Link href="/talento/persona-dos">Persona dos</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full hidden md:flex sm:flex-col md:flex-row flex-wrap">
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
    );
}
