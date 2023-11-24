/* eslint-disable @next/next/no-img-element */
"use client";

const AudiovosualGrid = ({ videos }) => {
    return (
        <div className="flex flex-col flex-nowrap w-full items-center justify-between md:flex-row md:flex-wrap md:w-auto bg-black">
            {videos
                .slice(0, 6)
                .map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="relative md:w-1/2 text-2xl hover:text-3xl cursor-pointer "
                        >
                            <video
                                muted
                                onMouseOver={(event) => event.target.play()}
                                onMouseOut={(event) => event.target.pause()}
                            >
                                <source
                                    src={item?.assetVideo?.video?.mp4Url}
                                    type="video/mp4"
                                />
                            </video>

                            {/* <img
                            className=""
                            src={`${item.asset.url}`}
                            alt={`${item.title}`}
                        /> */}
                        </a>
                    );
                })}
        </div>
    );
};

export default AudiovosualGrid;
