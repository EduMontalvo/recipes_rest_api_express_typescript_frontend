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
            <div className="w-64 h-96 bg-white rounded-xl hover:shadow-xl hover:transition-all hover:duration-700 hover:ease-linear">
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="Imagen de prueba" className="w-full h-72 rounded-3xl p-3" />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-2xl mb-2">{recipe.name}</h2>
                    <div className="flex justify-between">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">Facil</span>
                        <button className="cursor-pointer text-sm" onClick={() => navigate(`receta/${recipe.id}/editar`)}>
                            Editar <FormOutlined className="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
