import { safeParse } from "valibot"
import { DraftRecipeSchema, Recipe, RecipeSchema, RecipesSchema } from "../types"
import axios from "axios"
import { toBoolean } from "../utils"

type RecipeData = {
    [k: string]: FormDataEntryValue
}

export const addRecipe = async (data: RecipeData) => {
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

export const getRecipeByID = async (id: Recipe['id']) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/recipes/${id}`
        const { data } = await axios.get(url)
        const result = safeParse(RecipeSchema, data.data)

        if (result.success) {
            return result.output
        } else {
            throw new Error('Ocurrio un error')
        }

    } catch (error) {
        console.log(error)
    }
}

export const updateRecipe = async (data: RecipeData, id: Recipe['id']) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/recipes/${id}`
        const result = safeParse(RecipeSchema, {
            id,
            name: data.name,
            quantity: +data.quantity,
            ingredients: data.ingredients,
            preparation: data.preparation,
            revised: toBoolean(data.revised.toString())
        })
        if (result.success) {
            await axios.put(url,result.output)
        } else {
            throw new Error('Ocurrio un error . . .')
        }
    } catch (error) {
        console.log(error)
    }
}