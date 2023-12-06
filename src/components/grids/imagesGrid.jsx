import { Image as DatoImage } from "react-datocms";

function ImagesGrid({ imagenes }) {
    return (
        <ul className="flex flex-row flex-wrap overflow-scroll">
            {imagenes.map((image, index) => {
                const { responsiveImage } = image;

                return (
                    <li key={index} className="w-1/2">
                        <DatoImage
                            data={responsiveImage}
                            className=""
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default ImagesGrid;
