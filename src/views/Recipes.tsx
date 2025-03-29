import { Link, useLoaderData } from "react-router-dom";
import { getRecipes } from "../services/RecipeService";
import { Recipe } from "../types";
import Card from "../components/Card";

export const loader = async () => {
    const recipes = await getRecipes()
    return recipes
}
export default function Recipes() {
    /* const [showMenu, setShowMenu] = useState(false)
    const [showLinks, setShowLinks] = useState(false) */

    /* const changeShowMenu = (showMenu: boolean) => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    } */
    /* useEffect(() => {
        if (showMenu) {
            const timer = setTimeout(() => {
                setShowLinks(true)
            }, 400);
            return () => clearTimeout(timer)
        } else {
            setShowLinks(false)
        }

    }, [showMenu]) */

    const recipesdata = useLoaderData() as Recipe[]
    return (
        <>
            <div className="h-full w-full">
                <div className="flex flex-col px-15 w-[50%] mt-10">
                    <h1 className="text-4xl font-bold">Lista de Recetas</h1>
                    <p className="text-base mt-2">A continuación encontraras una lista de recetas disponibles en nuestra plataforma</p>
                </div>
                <div className="flex justify-between items-center w-full px-15 mt-10 mb-6 ">
                    <Link to="/" className="text-center text-md font-normal py-2 px-7 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">Regresar Home</Link>
                    <Link to="/recetas/receta/nueva" className="text-center text-md font-normal py-2 px-7 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">Agregar Receta</Link>
                </div>
                <div className="flex justify-around items-center flex-wrap gap-y-10 w-[100%] h-full px-6 pt-4 pb-10">
                    {recipesdata.map((recipe) => (
                        <div key={recipe.id}>
                            <Card recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

{/* <div className="flex justify-center items-end h-full w-full p-4">
                    <div className={`transition-all duration-300 ease-linear ${showMenu ? 'w-full h-[10%] md:w-[45%]  lg:w-[35%] lg:h-[12%] shadow-2xl rounded-2xl bg-white cursor-pointer flex justify-around items-center ' : 'rounded-full bg-white w-[18%] h-[8%] md:w-[7%] md:h-[10%] lg:w-[6%] lg:h-[12%] cursor-pointer flex justify-center text-2xl shadow-2xl '}`} onClick={() => changeShowMenu(showMenu)} >
                        <MenuOutlined className={showMenu ? 'custom-hidden' : ''} />
                        {showLinks && (
                            <>
                                <Link to="/" className="text-center text-md font-normal py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer">Regresar Home</Link>
                                <Link to="/recetas/nueva" className="text-center text-md font-normal py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer">Agregar Receta</Link>
                            </>
                        )}
                    </div>
                </div> */}