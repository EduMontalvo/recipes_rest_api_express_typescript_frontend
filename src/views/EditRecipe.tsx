import { ActionFunctionArgs, Form, Link, useActionData, redirect, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getRecipeByID, updateRecipe } from "../services/RecipeService";
import { Recipe } from "../types";

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData())
    let error = ''
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    } else if (+data.quantity <= 0) {
        error = 'La cantidad debe ser mayor a 0'
    }
    if (error.length) {
        return error
    }
    if (params.id !== undefined) {
        await updateRecipe(data, +params.id)
    }
    return redirect('/recetas')
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (params.id !== undefined) {
        const recipe = await getRecipeByID(+params.id)
        if (!recipe) {
            return redirect('/recetas')
        } else {
            return recipe
        }
    }
}
const revisedOptions = [
    {
        name: 'Revisado',
        value: true
    },
    {
        name: 'No Revisado',
        value: false
    }
]
export default function EditRecipe() {
    const recipe = useLoaderData() as Recipe
    const error = useActionData() as string

    return (
        <>
            <div className="h-full w-full relative">
                <img src="https://i.imgur.com/YFO7YKO.jpeg" alt="" className="absolute inset-0 object-cover h-full w-full" />
                <div className="flex justify-end h-[10%] px-6 pt-4 items-center relative">
                    <Link to="/recetas" className="text-center py-2 px-4 bg-white text-black rounded-lg shadow hover:bg-black hover:text-white cursor-pointer">Regresar a Recetas</Link>
                </div>
                <div className="h-full w-full flex justify-center items-center p-5 relative">
                    <div className="bg-white flex justify-center items-center w-[40%] h-[92%] m-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col justify-center items-center p-5 h-[90%] w-full">
                            <Form method="POST" className="space-y-2">
                                <h2 className="text-4xl font-bold text-center">Actualizar Receta</h2>
                                <p className="text-gray-500 text-center w-[80%] mx-auto text-sm">Edita los campos que deseas para modificar la receta</p>
                                {error && <ErrorMessage>{error}</ErrorMessage>}
                                <label htmlFor="name" className="font-semibold text-gray-500">Nombre de la receta:</label>
                                <input type="text" id="name" name="name" defaultValue={recipe.name} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <label htmlFor="quantity" className="font-semibold text-gray-500">Cantidad de personas:</label>
                                <input type="number" id="quantity" name="quantity" defaultValue={recipe.quantity} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <label htmlFor="ingredients" className="font-semibold text-gray-500">Ingredientes:</label>
                                <textarea id="ingredients" name="ingredients" defaultValue={recipe.ingredients} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" />
                                <label htmlFor="preparation" className="font-semibold text-gray-500">Preparación:</label>
                                <textarea id="preparation" name="preparation" defaultValue={recipe.preparation} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" />
                                <label htmlFor="imageURL" className="font-semibold text-gray-500">URL de la imagen</label>
                                <input type="text" id="imageURL" name="imageURL" defaultValue={recipe.imageURL} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <div className="flex flex-col">
                                    <label htmlFor="revised" className="text-gray-500 font-semibold">Estado</label>
                                    <select name="revised" id="revised" defaultValue={recipe.revised.toString()} className="rounded-md h-7 px-2.5 bg-gray-50 border border-gray-300 w-[60%] font-semibold">
                                        {revisedOptions.map(option => (
                                            <option key={option.name} value={option.value.toString()}>{option.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="difficulty" className="text-gray-500 font-semibold">Dificultad</label>
                                    <select name="difficulty" id="difficulty" defaultValue={recipe.difficulty} className="rounded-md h-7 px-2.5 bg-gray-50 border border-gray-300 w-[60%] font-semibold">
                                        <option value="Facil">Facil</option>
                                        <option value="Intermedio">Intermedio</option>
                                        <option value="Dificil">Dificil</option>
                                    </select>
                                </div>
                                <input type="submit" value={'Guardar Receta'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-xs hover:bg-black hover:text-white cursor-pointer my-2" />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
