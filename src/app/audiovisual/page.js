export const metadata ={
    title: 'Audiovisual'
};

export default function Page() {
    return (
        <main className="ml-16">
            <div className="h-screen flex sm:flex-col md:flex-row flex-wrap">
                <div className="w-1/2 flex items-center justify-center  bg-green-200">
                    Item 1
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-green-300">
                    Item 2
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-green-400">
                    Item 3
                </div>
                <div className="w-1/2 flex items-center justify-center  bg-green-500">
                    Item 4
                </div>
            </div>
        </main>
    )
};
