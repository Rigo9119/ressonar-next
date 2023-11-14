export const metadata ={
    title: 'Audiovisual'
};

export default function Page() {
    return (
        <main className="pt-16 md:ml-16 md:pt-0">
            <div className="h-screen flex flex-col md:flex-row md:flex-wrap">
                <div className="w-full h-80 md:h-auto md:w-1/2 flex items-center justify-center  bg-green-200">
                    Item 1
                </div>
                <div className="w-full h-80 md:h-auto md:w-1/2 flex items-center justify-center  bg-green-300">
                    Item 2
                </div>
                <div className="w-full h-80 md:h-auto md:w-1/2 flex items-center justify-center  bg-green-400">
                    Item 3
                </div>
                <div className="w-full h-80 md:h-auto md:w-1/2 flex items-center justify-center  bg-green-500">
                    Item 4
                </div>
            </div>
        </main>
    )
};
