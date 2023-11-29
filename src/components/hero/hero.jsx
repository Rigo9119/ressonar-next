'use client'

const Hero = ({ hero }) => {
    return (
        <section className="sm:flex-col flex items-center justify-center flex-col bg-black">
            <video
                autoPlay={'autoplay'}
                data-autoplay=''
            >
                <source src={hero.heroVideo.video.mp4Url} type="video/mp4" />
            </video>
        </section>
    );
};

export default Hero;
