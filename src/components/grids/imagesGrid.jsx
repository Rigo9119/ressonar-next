import { Image as DatoImage } from "react-datocms";

function ImagesGrid({ imagenes }) {
    return (
        <ul className="flex flex-col md:flex-row flex-wrap  w-full">
            {imagenes.map((image, index) => {
                const { responsiveImage } = image;

                return (
                    <li key={index} className="w-full md:w-1/2 cursor-pointer">
                        <a href={image.customData.image_link} target="_blank">
                            <DatoImage data={responsiveImage} className="" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default ImagesGrid;
