import { safeParse } from "valibot";
import { DraftRecipeSchema } from "../types";
import axios from "axios";

type AddRecipeProps = {
    [k: string]: FormDataEntryValue;
}

export const AddRecipe = async (data: AddRecipeProps) => {
    try {
        const result = safeParse(DraftRecipeSchema, {
            name: data.name,
            quantity: +data.quantity,
            ingredients: data.ingredients,
            preparation: data.preparation
        })

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/recipes`
            const {data} = await axios.post(url,{
                name:result.output.name,
                quantity:result.output.quantity,
                ingredients:result.output.ingredients,
                preparation:result.output.preparation,
            })
        }else{
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}