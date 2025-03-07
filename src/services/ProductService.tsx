import { safeParse } from "valibot"
import { DraftRecipeSchema } from "../types"
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