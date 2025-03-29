import { ActionFunctionArgs, Form, Link, useActionData, redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addRecipe } from "../services/RecipeService";

export const action = async ({ request }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData())
    let error = ''
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }else if(+data.quantity <= 0) {
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
            <div className="h-screen w-full ">
                <div className="flex justify-end h-[10%] px-6 items-center">
                    <Link to="/recetas" className="text-center py-2 px-4 bg-white text-black rounded-lg shadow hover:bg-black hover:text-white cursor-pointer">Regresar a Recetas</Link>
                </div>
                <div className="h-[90%] w-full">
                    <div className="bg-white grid grid-cols-2 w-[65%] h-[92%] m-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col justify-center items-center">
                            <Form method="POST" className="space-y-2">
                                <h2 className="text-3xl font-bold">Agregar Receta</h2>
                                <p className="text-gray-500">Llena el formulario para agregar una nueva receta</p>
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
                                <input type="text" id="imageURL" name="imageURL" placeholder="Ej: https://i.imgur.com/Mt7ogEb.jpeg" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"/>
                                <input type="submit" value={'Agregar Receta'} className="text-center text-md font-normal w-full py-2 px-8 bg-gray-200 rounded-xs hover:bg-black hover:text-white cursor-pointer" />
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
