import { Link } from "react-router-dom";

export default function Recipes() {
    return (
        <>
            <div className="h-screen w-full flex flex-col items-center space-y-">
                <h1 className="text-4xl font-bold mt-10 ">Lista de Recetas</h1>
                <p className="text-gray-500 ">Aqui se mostraran la lista de todas las recetas de la base de datos</p>
                <div className="flex justify-around items-center flex-wrap gap-y-10 w-[100%] h-screen px-6 py-4">
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                    <div className="bg-black w-[30%] h-[50%] text-white">hola</div>
                </div>
                <div className="flex justify-center items-end h-full w-full p-4 fixed">
                    <div className="w-[35%] h-[10%] py-10 shadow-2xl rounded-xl flex justify-around items-center bg-white opacity-100">
                        <Link to="/" className="text-center text-md font-normal py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer">Regresar Home</Link>
                        <Link to="/recetas/nueva" className="text-center text-md font-normal py-2 px-8 bg-gray-200 rounded-full hover:bg-black hover:text-white cursor-pointer">Agregar Receta</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
