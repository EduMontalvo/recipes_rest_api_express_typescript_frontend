import { ActionFunctionArgs, Form, Link, useActionData, redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addRecipe } from "../services/RecipeService";

export const action = async ({ request }: ActionFunctionArgs) => {
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
    await addRecipe(data)
    return redirect('/recetas')
}
export default function NewRecipe() {

    const error = useActionData() as string

    return (
        <>
            <div className="h-full w-full relative">
                <img src="https://i.imgur.com/mkHYpYd.jpeg" alt="" className="absolute inset-0 object-cover h-full w-full"/>
                <div className="flex justify-end h-[10%] px-6 pt-4 items-center relative">
                    <Link to="/recetas" className="text-center py-2 px-4 bg-white text-black rounded-lg shadow hover:bg-black hover:text-white cursor-pointer">Regresar a Recetas</Link>
                </div>
                <div className="h-full w-full flex justify-center items-center p-5 relative">
                    <div className="bg-white flex justify-center items-center w-[40%] h-[92%] m-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col justify-center items-center p-5 h-[90%] w-full">
                            <Form method="POST" className="space-y-2">
                                <h2 className="text-4xl font-bold text-center">Agregar Receta</h2>
                                <p className="text-gray-500 text-center w-[80%] mx-auto text-sm">Llena el formulario para agregar una nueva receta</p>
                                {error && <ErrorMessage>{error}</ErrorMessage>}
                                <label htmlFor="name" className="font-semibold">Nombre de la receta:</label>
                                <input type="text" id="name" name="name" placeholder="Ej: Lomo saltado" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <label htmlFor="quantity" className="font-semibold">Cantidad de personas:</label>
                                <input type="number" id="quantity" name="quantity" placeholder="Ej: 2 personas" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <label htmlFor="ingredients" className="font-semibold">Ingredientes:</label>
                                <textarea id="ingredients" name="ingredients" placeholder="Ej: 1kg de carne, 1kg de verduras" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" />
                                <label htmlFor="preparation" className="font-semibold">Preparación:</label>
                                <textarea id="preparation" name="preparation" placeholder="Ej: Lavar la carne, cortarla y cocinarla" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 resize-none" />
                                <label htmlFor="imageURL">URL de la imagen</label>
                                <input type="text" id="imageURL" name="imageURL" placeholder="Ej: https://i.imgur.com/Mt7ogEb.jpeg" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" />
                                <select name="difficulty" id="difficulty">
                                    <option value="Facil">Facil</option>
                                    <option value="Intermedio">Intermedio</option>
                                    <option value="Dificil">Dificil</option>
                                </select>
                                <input type="submit" value={'Agregar Receta'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-xs hover:bg-black hover:text-white cursor-pointer" />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
