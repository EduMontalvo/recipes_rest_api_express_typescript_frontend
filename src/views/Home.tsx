import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import MiddleSection from "../components/MiddleSection";
import PopularRecipes from "../components/PopularRecipes";
import { getRecipeByID, getRecipes } from "../services/RecipeService";
import { Recipe } from "../types";

export const loader = async () => {

    let randomNumberNotRepeat = [] as number[]

    const recipes = await getRecipes()
    let longitud
    if (recipes !== undefined) {
        longitud = recipes.length
        for (let i = 0; i <= 100; i++) {
            let firstRange = Math.round((Math.random() * 10))
            if (!randomNumberNotRepeat.includes(firstRange) && firstRange !== 0 && firstRange <= longitud) {
                randomNumberNotRepeat = [...randomNumberNotRepeat, firstRange]
            }
            if (randomNumberNotRepeat.length === 8) {
                console.log(randomNumberNotRepeat)
                break
            }
        }
    }

    let RecipesDay = [] as Recipe[]

    for (let value of randomNumberNotRepeat) {
        const recipe = await getRecipeByID(value)
        console.log(recipe)
        if (recipe) {
            RecipesDay = [...RecipesDay, recipe]
        }
    }
    return RecipesDay
}
export default function Home() {
    const recipesForToday = useLoaderData() as Recipe[]
    return (
        <>
            <main>
                <Hero />
                <MiddleSection />
                <PopularRecipes recipesForToday={recipesForToday} />
            </main>
        </>
    )
}
