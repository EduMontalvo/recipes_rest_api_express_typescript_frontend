import LogoHorizontal from "../assets/LogoHorizontal.svg"
import LogoVertical from "../assets/LogoVertical.svg"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="flex items-center h-[100%] bg-black rounded-2xl w-[90%] mx-auto my-5">
                    <div className="w-[50%] px-10 py-5">
                        <img src={LogoHorizontal} alt="" className="h-20"/>
                        <div className="h-full flex flex-col ">
                            <p className="text-gray-300 my-7">Kausana es una plataforma en línea que permite a los usuarios compartir y descubrir recetas deliciosas. Nuestra misión es fomentar una comunidad de amantes de la cocina que puedan inspirarse mutuamente y disfrutar de nuevos sabores.</p>
                            <h3 className="text-gray-300 text-sm ">{new Date().getFullYear()} © Kausana. Todos los derechos reservados - EduMontalvo</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%] h-[100%] justify-around">
                        <div className="p-10 flex h-[30%]">
                            <div className="text-white w-[33%]">
                                <h2 className="font-bold mb-6">Kausana</h2>
                                <ul className="text-gray-300 text-sm">
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Whatsapp</li>
                                </ul>
                            </div>
                            <div className="text-white w-[33%]">
                                <h2 className="font-bold mb-6">Support</h2>
                                <ul className="text-gray-300 text-sm">
                                    <li>Nosotros</li>
                                    <li>FAQ</li>
                                    <li>User Policy</li>
                                    <li>Membership</li>
                                </ul>
                            </div>
                            <div className="text-white w-[33%]">
                                <h2 className="font-bold mb-6">Contactos</h2>
                                <ul className="text-gray-300 text-sm">
                                    <li>Número de Contacto</li>
                                    <li>Email</li>
                                    <li>Ubicación</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center p-5 h-[30%]">
                            <input type="text" className="w-full text-gray-200 h-8 px-2 py-4 mx-4 border-b-2 border-gray-300 placeholder:text-gray-300 placeholder:text-sm outline-none" placeholder="Ingresa tu correo electronico" />
                            <button className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm cursor-pointer">Subscribirse</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

