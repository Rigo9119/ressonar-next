import PackItemCard from "@/components/cards/packItemCard";

const Packs = ({ packs }) => {


    return (
        <section className="p-4 flex flex-col justify-around items-center h-auto md:flex md:py-12 md:px-8 md:flex-col gap-4 md:flex-wrap ">
            <h2 className="font-bold text-7xl">Packs</h2>
            <div className="w-full">
                <div id="slider" className="flex flex-nowrap overflow-x-scroll scrolling-touch items-start">
                    {packs.map((pack, index) => (
                        <PackItemCard pack={pack} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packs;
