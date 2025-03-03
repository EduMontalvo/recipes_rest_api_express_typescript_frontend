
export default function MiddleSection() {
    return (
        <>
            <div className="my-20 h-full flex flex-col items-center space-y-14">
                <h2 className="text-3xl font-semibold">What to <p className="text-orange-400 inline">Cook</p>?</h2>
                <div>
                    <form action="" className="w-full flex gap-3">
                        <input type="button" value={'All Types'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                        <input type="button" value={'Meat'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                        <input type="button" value={'Chicken'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                        <input type="button" value={'Salad and Sides'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                        <input type="button" value={'Healthy Eat'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                        <input type="button" value={'Quick and Easy'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer"/>
                    </form>
                </div>
            </div>
        </>
    )
}
