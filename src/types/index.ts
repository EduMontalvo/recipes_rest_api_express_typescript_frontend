import { number, object, string } from "valibot";

export const DraftRecipeSchema = object({
    name: string(),
    quantity: number(),
    ingredients: string(),
    preparation: string()
})