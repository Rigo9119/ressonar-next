'use client'
import React from "react";

const Hero = ({ hero }) => {
    return (
        <section className="sm:flex-col flex items-center justify-center flex-col h-screen bg-black">
            <video
                loop
                autoPlay={'autoplay'}
                data-autoplay=''
            >
                <source src={hero.heroVideo.video.mp4Url} type="video/mp4" />
            </video>
        </section>
    );
};

export default Hero;
