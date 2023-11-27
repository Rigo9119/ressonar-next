'use client'
import React from "react";

const AnchorVideo = ({ asset }) => {
    const handlePlay = (event) => {
        event.target.play();
    };

    const handleStop = (event) => {
        event.target.pause();
    };

    return (
        <a
            href={asset.link}
            target="_blank"
            className="relative cursor-pointer md:w-full"
        >
            <video
                muted
                loop
                poster={asset.asset.url}
                onMouseOver={(event) => handlePlay(event)}
                onMouseOut={(event) => handleStop(event)}
            >
                <source
                    src={asset?.assetVideo?.video?.mp4Url}
                    type="video/mp4"
                />
            </video>
            <span className="py-4 px-2 absolute bottom-0 text-white bg-gradient-to-t from-black to-transparent text-xl w-full">
                {asset.title}
            </span>
        </a>
    );
};

export default AnchorVideo;
