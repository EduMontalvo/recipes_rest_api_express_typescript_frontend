import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/LogoHorizontal.svg"
import LogoVertical from "../assets/LogoVertical.svg"

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const words = [
        "Auténtico y Tradicional",
        "Pasión en Cada Plato",
        "Cocina que Inspira",
        "Herencia de Sabor",
        "Frescura Peruana",
        "Sabor que Conquista",
        "Raíces que Alimentan",
        "Un Perú para Probar"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <div className="relative w-full h-full pt-5 pb-10">

                <video src="https://videos.pexels.com/video-files/4252294/4252294-uhd_2732_1440_25fps.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0 ">
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
                <nav>
                    <div className="flex justify-between items-center px-10 pb-10 relative z-10">
                        <img src={LogoHorizontal} alt="" className="h-16" />
                        <ul className="flex space-x-8  text-white">
                            <li><Link to="/recetas" className="text-white hover:text-gray-300">Recetas</Link></li>
                            <li><Link to="/nosotros" className="text-white hover:text-gray-300">Nosotros</Link></li>
                            <li><Link to="/contacto" className="text-white hover:text-gray-300">Contacto</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="relative z-10 px-10 space-y-5 flex flex-col justify-center h-full">
                    <h2 className="text-8xl font-light text-white">Sabores del Perú</h2>
                    <div className="overflow-hidden ">
                        <h2 className="text-8xl font-light text-white animate-slide-up">{words[currentIndex]}</h2>
                    </div>
                    <p className="text-white text-xl font-light w-96 mt-16">Descubre una variedad de recetas tradicionales peruanas y libera tu chef interior de la manera más sencilla con Flavoris.</p>

                    <div className="grid grid-cols-2 gap-4 w-96">
                        <Link to="/recetas/receta/nueva" className="text-center py-3 border-1 border-white text-white rounded-full">Agregar Recetas</Link>
                        <Link to="/recetas" className="text-center py-3 bg-orange-400 text-white rounded-full">Ver Recetas</Link>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes slideUp {
                        0% {
                            opacity: 1;
                            transform: translateY(100%);
                        }
                        50% {
                            opacity: 1;
                            transform: translateY(-5%);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(-130%);
                        }
                    }
                    .animate-slide-up {
                        animation: slideUp 4s ease-in-out infinite;
                        animation-delay: 8s; /* Retarda la animación en 1 segundo */
                    }
                `}
            </style>
        </>
    )
}
