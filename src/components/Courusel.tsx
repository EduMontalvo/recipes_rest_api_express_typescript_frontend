import { Recipe } from "../types"

type CouruselProps = {
    recipesForToday: Recipe[]
}
export default function Courusel({ recipesForToday }: CouruselProps) {
    return (
        <>
            <div className="h-full w-[90%] mx-auto mb-20">
                <h2 className="text-5xl font-semibold pb-10 pl-10">Necesitas algo de  <p className="text-orange-400 inline">inspiracion ?</p></h2>
                <div className="flex px-10">
                    {recipesForToday.map((recipe) => (
                        <div key={recipe.id} className="h-full">
                            <img src={recipe.imageURL} className="w-40 h-80 object-cover hover:duration-500 hover:ease-in-out hover:w-96 hover:shadow-2xl grow ease-in-out duration-500 hover:transform hover:scale-110 " alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


/* opacity-90   rounded-2xl grow object-cover */