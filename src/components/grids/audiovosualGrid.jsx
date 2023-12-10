import AnchorVideo from "../anchorVideo/anchorVideo";

const AudiovosualGrid = ({ videos }) => {
    //Devolver a dos columnas
    return (
        <div className="flex flex-col md:flex-row flex-wrap w-full items-center justify-between bg-black">
            {videos.reverse().map((video, index) => {
                return (
                    <AnchorVideo asset={video} key={index}/>
                )
            })}
        </div>
    );
};

export default AudiovosualGrid;
