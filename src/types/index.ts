import { boolean, number, object, string, InferOutput, array} from "valibot";

export const DraftRecipeSchema = object({
    name: string(),
    quantity: number(),
    ingredients: string(),
    preparation: string()
})

export const RecipeSchema = object({
    id: number(),
    name: string(),
    quantity: number(),
    ingredients: string(),
    preparation: string(),
    revised: boolean()
})

export const RecipesSchema = array(RecipeSchema)

export type Product = InferOutput<typeof RecipeSchema>