import { FormOutlined } from "@ant-design/icons"
import { Recipe } from "../types"
import { useNavigate } from "react-router-dom"

type CardProps = {
    recipe: Recipe
}
export default function Card({ recipe }: CardProps) {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-80 h-96 bg-white rounded-xl hover:shadow-xl hover:transition-all hover:duration-700 hover:ease-linear">
                <img src={recipe.imageURL} alt="Imagen de prueba" className="w-full h-72 rounded-3xl p-3" />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-xl mb-2">{recipe.name}</h2>
                    <div className="flex justify-between">
                        <span className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ${recipe.difficulty == 'Facil'? 'bg-green-50 text-green-700 ring-1 ring-green-600/20 ring-inset' : (recipe.difficulty == 'Intermedio')? 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20 ring-inset' : 'bg-red-50 text-red-700 ring-1 ring-red-600/20 ring-inset'  }`}>{recipe.difficulty}</span>
                        <button className="cursor-pointer text-sm" onClick={() => navigate(`receta/${recipe.id}/editar`)}>
                            Editar <FormOutlined className="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
