import { Recipe } from "../types"
import Card from "./Card"
import Courusel from "./Courusel"

type PopularRecipesProps = {
    recipesForToday: Recipe[]
}
export default function PopularRecipes({ recipesForToday }: PopularRecipesProps) {
    return (
        <>
            <div className="h-full w-[90%] mx-auto">
                <h2 className="text-4xl font-semibold p-10">Recipes for <p className="text-orange-400 inline">Today</p></h2>
                <div className="flex px-10">
                    {recipesForToday.map(recipe => (
                        <div key={recipe.id} className="w-0 grow object-cover opacity-90  hover:duration-500 hover:ease-in-out hover:w-[10%]">
                            <Card recipe={recipe} />
                        </div>
                    ))}
                </div>
                {/* <Courusel recipes={recipes}/> */}
            </div>
        </>
    )
}
