
export default function MiddleSection() {
    return (
        <>
            <div className="p-20">
                <div>
                    <h1 className="text-5xl font-semibold text-center px-32 mx-auto w-[70%] py-4">Combiertete en un Chef con nuestras recetas.</h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center">
                        <img src="https://i.imgur.com/KuNLrYv.png" alt="Chef cortando alimentos" className="w-[230px] h-[250px] rounded-xl bg-white opacity-80" />
                    </div>
                    <div>
                        <p className="mx-auto text-center text-gray-500 px-20 w-[80%] text-sm">
                            Comparte, aprende y cocina con amantes de la cocina como tú.
                        </p>
                        <div className="flex justify-evenly items-end">
                            <div className="bg-orange-400 w-[230px] h-[250px] rounded-xl flex justify-center items-center">
                                <h2 className="text-white font-semibold text-2xl w-40 ">"Descubre lo fácil y divertido que es cocinar."</h2>
                            </div>
                            <div className="flex flex-col w-[200px] h-[300px] gap-2 justify-end ">
                                <div className="rounded-xl shadow-2xl bg-white p-2">
                                    <h2 className="font-bold text-sm">Achievements</h2>
                                    <p className="text-sm">Cook 2 foods today</p>
                                </div>
                                <div className="rounded-xl shadow-2xl bg-white p-2">
                                    <img src="" alt="" />
                                    <h2 className="font-bold text-sm">Live Stream</h2>
                                    <p className="text-sm">Cook 2 foods today</p>
                                </div>
                                <div className="rounded-xl shadow-2xl bg-white p-2">
                                    <img src="" alt="" />
                                    <h2 className="font-bold text-sm">  Today's Recipes</h2>
                                    <p className="text-sm">Cook 2 foods today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/aZFQ2s3.jpeg" alt="Chef cortando alimentos" className="w-[250px] h-full rounded-xl bg-white opacity-80" />
                    </div>
                </div>
            </div>
        </>
    )
}
