/* eslint-disable @next/next/no-img-element */
export const metadata = {
    title: "Ressonar | Ressonar films",
    description: "Ressonar films | Pagina de Ressonar films",
};

export default function Page() {
    return (
        <main className="pt-16 md:ml-16">
            <section className="flex justify-center items-center h-screen">
                <h2 className="text-4xl md:text-8xl">Ressonar</h2>
            </section>
            <section className="flex flex-col md:flex-row gap-10 justify-around items-center">
                <div className="flex flex-col gap-4 p-6 w-full md:w-1/2 md:py-24 lg:px-12">
                    <p className="text-xl">
                        Ressonar es una forma de vivir, interactuar y crear.
                        Somos una productura audiovisual, creamos piezas y
                        experiencias que te hacen vibrar su energia.
                    </p>
                    <p className="text-xl">
                        Desarrollamos todo el proceso de una pieza audiovisual,
                        desde la escritura de un guion y conceptualización,
                        preproduccion, filmación y postproducción.
                    </p>
                    <p className="text-xl">Traemos a la vida aquello que aún está por contar.</p>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <img src="" alt="imagen de algo" />
                </div>
            </section>
        </main>
    );
}
