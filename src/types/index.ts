import { boolean, number, object, string, InferOutput, array} from "valibot";

export const DraftRecipeSchema = object({
    name: string(),
    quantity: number(),
    ingredients: string(),
    preparation: string(),
    imageURL: string(),
    difficulty: string()
})

export const RecipeSchema = object({
    id: number(),
    name: string(),
    quantity: number(),
    ingredients: string(),
    preparation: string(),
    imageURL: string(),
    revised: boolean(),
    difficulty: string()
})

export const RecipesSchema = array(RecipeSchema)

export type Recipe = InferOutput<typeof RecipeSchema>