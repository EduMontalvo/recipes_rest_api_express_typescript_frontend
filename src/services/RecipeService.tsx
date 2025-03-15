import { safeParse } from "valibot"
import { DraftRecipeSchema, RecipesSchema } from "../types"
import axios from "axios"

type addRecipeProps = {
    [k: string]: FormDataEntryValue
}

export const addRecipe = async (data: addRecipeProps) => {
    try {
        const result = safeParse(DraftRecipeSchema, {
            name: data.name,
            quantity: +data.quantity,
            ingredients: data.ingredients,
            preparation: data.preparation
        })
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/recipes`
            await axios.post(url, {
                name: result.output.name,
                quantity: result.output.quantity,
                ingredients: result.output.ingredients,
                preparation: result.output.preparation
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getRecipes = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/recipes`
        const { data } = await axios.get(url)
        const result = safeParse(RecipesSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error('Ocurrio un problema ...')
        }
    } catch (error) {
        console.log(error)
    }
}

