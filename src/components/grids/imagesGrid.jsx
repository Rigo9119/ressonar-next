import { Image as DatoImage } from "react-datocms";

function ImagesGrid({ imagenes }) {

    return (
        <div className='flex flex-row justify-between items-center w-full felx-wrap'>
            {imagenes.map((image, index) => {
                const { responsiveImage } = image

                return (
                    <div
                        key={index}
                        className='w-1/2'
                    >
                        <DatoImage data={responsiveImage} />
                    </div>
                )
            })}
        </div>
    )
}

export default ImagesGrid
