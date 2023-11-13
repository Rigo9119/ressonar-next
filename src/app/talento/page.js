import Link from "next/link";

export const metadata = {
    title: "Talento pagina principal",
};

export default function Page() {
    return (
        <main className="pl-16 flex flex-row h-screen">
            <div className="w-1/4 p-4 bg-red-500 text-black">
                <ul>
                    <li className="mb-3">
                        <Link href='/talento/person-uno'>
                            Persona uno
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href='/talento/persona-dos'>
                            Persona dos
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 flex sm:flex-col md:flex-row flex-wrap">
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
