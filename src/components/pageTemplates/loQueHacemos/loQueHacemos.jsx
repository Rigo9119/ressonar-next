import { Image as DatoImage } from "react-datocms";

const LoQueHacemos = ({ ressonar }) => {
    const { parrafo } = ressonar;
    const parrafoArr = parrafo.split("\n");

    return (
        <section className="flex flex-row items-center justify-between gap-6 bg-black p-8">
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-6">
                <div className="flex flex-col">
                    <h2 className="font-bold text-4xl mb-4 text-center md:text-7xl md:text-start text-white">
                        {ressonar.titulo}
                    </h2>
                    {parrafoArr.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className="text-justify text-white pb-2"
                            >
                                {item.replace("*", " ")}
                            </p>
                        );
                    })}
                </div>
                <a
                    href="https://www.behance.net/ressonarfilms?tracking_source=search_users"
                    target="_blank"
                    className="align-middle cursor-pointer p-5 mb-5 rounded-se-xl rounded-bl-xl bg-red-500 text-white hover:shadow-2xl w-fit"
                >
                    {ressonar.textoBoton}
                </a>
            </div>
            <div className="hidden md:flex items-center  justify-center w-1/2">
                <DatoImage
                    className="w-full -z-10"
                    data={ressonar.imagen.responsiveImage}
                />
            </div>
        </section>
    );
};

export default LoQueHacemos;
