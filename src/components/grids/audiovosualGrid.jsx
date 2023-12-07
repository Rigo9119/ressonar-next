import AnchorVideo from "../anchorVideo/anchorVideo";

const AudiovosualGrid = ({ videos }) => {
    //Devolver a dos columnas
    return (
        <div className="flex flex-col flex-nowrap w-full items-center justify-between bg-black">
            <div>
                {videos.slice(0, 1).map((item, index) => {
                    return <AnchorVideo key={index} asset={item} />;
                })}
            </div>
            <div className="flex flex-col justify-center items-center w-full md:flex-row">
                {videos.slice(1, 4).map((item, index) => {
                    return <AnchorVideo key={index} asset={item} />;
                })}
            </div>
            <div className="flex flex-col justify-center items-center w-full md:flex-row">
                {videos.slice(4, 6).map((item, index) => {
                    return <AnchorVideo key={index} asset={item} />;
                })}
            </div>
        </div>
    );
};

export default AudiovosualGrid;
