import { Recipe } from "../types"
import Card from "./Card"

type PopularRecipesProps = {
    recipesForToday: Recipe[]
}
export default function PopularRecipes({ recipesForToday }: PopularRecipesProps) {
    return (
        <>
            <div>
                <h2 className="text-4xl font-semibold p-10">Recipes for <p className="text-orange-400 inline">Today</p></h2>
                <div className="flex justify-between flex-wrap gap-10 p-10 w-full ">
                    {recipesForToday.map(recipe => (
                        <div key={recipe.id} className="w-[20%]">
                            <Card recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
