import { Link } from "react-router-dom";

export default function NewRecipe() {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="relative flex justify-end h-[10%] px-6 items-center">
                    <Link to="/home" className="text-center py-2 px-4 bg-white text-black  rounded-full border-2">Regresar a Home</Link>
                </div>
                <div className="relative h-[90%] w-full">
                    <div className="bg-white grid grid-cols-3 w-[60%] h-[90%] m-auto rounded-4xl border-2">
                        <div className="col-span-1">
                            <img src="https://i.imgur.com/YFO7YKO.jpeg" alt="topbanner" className="w-full h-full object-cover rounded-l-4xl" />
                        </div>
                        <div className="border-l-2">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
