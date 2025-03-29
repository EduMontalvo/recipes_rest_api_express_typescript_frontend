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
            <div className="h-screen w-full ">
                <div className="flex justify-end h-[10%] px-6 items-center">
                    <Link to="/recetas" className="text-center py-2 px-4 bg-white text-black rounded-lg shadow hover:bg-black hover:text-white cursor-pointer">Regresar a Recetas</Link>
                </div>
                <div className="h-[90%] w-full">
                    <div className="bg-white grid grid-cols-2 w-[70%] h-[92%] m-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col justify-center items-center px-4">
                            <Form method="POST" className="space-y-2">
                                <h2 className="text-3xl font-bold">Editar Receta</h2>
                                <p className="text-gray-500">Edita los campos que desees para actualiazar la receta</p>
                                {error && <ErrorMessage>{error}</ErrorMessage>}
                                <label htmlFor="name" className="font-semibold">Nombre de la receta:</label>
                                <input type="text" id="name" name="name" placeholder="Ej: Lomo saltado" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" defaultValue={recipe.name} />
                                <label htmlFor="quantity" className="font-semibold">Cantidad de personas:</label>
                                <input type="number" id="quantity" name="quantity" placeholder="Ej: 2 personas" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" defaultValue={recipe.quantity} />
                                <label htmlFor="ingredients" className="font-semibold">Ingredientes:</label>
                                <textarea id="ingredients" name="ingredients" placeholder="Ej: 1kg de carne, 1kg de verduras" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" defaultValue={recipe.ingredients} />
                                <label htmlFor="preparation" className="font-semibold">Preparación:</label>
                                <textarea id="preparation" name="preparation" placeholder="Ej: Lavar la carne, cortarla y cocinarla" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" defaultValue={recipe.preparation} />
                                <label htmlFor="revised">Estado</label>
                                <select name="revised" id="revised" defaultValue={recipe.revised.toString()}>
                                    {revisedOptions.map(option => (
                                        <option key={option.name} value={option.value.toString()}>{option.name}</option>
                                    ))}
                                </select>
                                <input type="submit" value={'Actualizar Receta'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-xs hover:bg-black hover:text-white cursor-pointer" />
                            </Form>
                        </div>
                        <div className="">
                            <img src="https://i.imgur.com/YFO7YKO.jpeg" alt="topbanner" className="w-full h-full object-cover rounded-4xl p-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
