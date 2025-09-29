import { CheckOutlined, OrderedListOutlined, UserOutlined } from "@ant-design/icons";

export default function Information() {
    return (
        <>
            <div className="w-full flex justify-center mb-20 gap-2">
                <div className="flex justify-around bg-neutral-100 rounded-2xl w-[60%]">
                    <div className="p-5">
                        <UserOutlined className="text-xl py-6" />
                        <h2 className="font-bold">Enfocado en el usuario</h2>
                        <p className="text-gray-500 font-semibold">Aquí tú eres el protagonista: comparte tus recetas, guarda tus favoritas y conecta con otros amantes de la cocina.</p>
                    </div>
                    <div className="p-5">
                        <OrderedListOutlined className="text-xl py-6" />
                        <h2 className="font-bold">Diversidad de recetas</h2>
                        <p className="text-gray-500 font-semibold">Tenemos de todo: desde recetas rápidas para el día a día hasta platos especiales para sorprender.</p>
                    </div>
                    <div className="p-5">
                        <CheckOutlined className="text-xl py-6" />
                        <h2 className="font-bold">Facilidad de uso</h2>
                        <p className="text-gray-500 font-semibold">Subir, buscar y cocinar nunca fue tan fácil. Todo está pensado para que disfrutes sin complicarte.</p>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col justify-center rounded-2xl shadow-xl">
                    <div className="flex items-center justify-around h-[70%] px-4">
                        <img src="https://comidasperuanas.com.pe/wp-content/uploads/2023/07/comidas_criollas_peruanas.png" alt="comidas peruanas" className="rounded-2xl w-[50%] h-[80%]" />
                        <div className="w-[50%] px-4">
                            <h2 className="font-bold text-orange-400">FEATURED</h2>
                            <p className="text-gray-500 font-semibold">Una receta nueva cada dia de la semana.</p>
                        </div>
                    </div>
                    <button className="font-semibold underline py-2 pr-15 text-xs text-right cursor-pointer">Ver mas recetas</button>
                </div>
            </div>
        </>
    )
}
