export const metadata = {
    title: "Contacto",
};

export default function Page() {
    return (
        <main className="pt-16 md:ml-16 md:pt-0 h-screen flex justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center">
                <h3 className="font-bold text-start text-4xl">Contacto</h3>
                <div className="w-full px-4 md:w-1/2">
                    <p className="text-justify md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facilis praesentium alias modi consequatur dolorem
                        aperiam quisquam ipsam provident obcaecati, nemo non quo
                        maxime.
                    </p>
                </div>
                <div className="w-full px-4 md:w-1/2">
                    <form className="flex flex-col gap-4 justify-center items-center">
                        <input
                            className="px-4 py-2 w-full border rounded border-color-black"
                            type="text"
                            placeholder="Tú nombre"
                        />
                        <input
                            className="px-4 py-2 w-full border rounded border-color-black"
                            type="text"
                            placeholder="Tú correo"
                        />
                        <input
                            className="px-4 py-2 w-full border rounded border-color-black"
                            type="text"
                            placeholder="Tú telefono"
                        />
                        <textarea
                            className="px-4 py-2 w-full border rounded border-color-black"
                            placeholder="Escribenos como podemos ayudarte"
                        />
                        <input
                            className="border w-1/2 rounded bg-green-500 px-4 py-2"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </main>
    );
}
