import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const words = ['Delicate','Food', 'Easy Food','Peruvian Food'] 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <div className="relative w-full h-screen">
                <video src="https://videos.pexels.com/video-files/4252294/4252294-uhd_2732_1440_25fps.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0 ">
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                <div className="relative z-10 p-10 space-y-5 flex flex-col justify-center h-full">
                    <h2 className="text-8xl font-light text-white">Adventure of</h2>
                    <div className="overflow-hidden ">
                        <h2 className="text-8xl font-light text-white animate-slide-up">{words[currentIndex]}</h2>
                    </div>
                    <p className="text-white text-xl font-light w-96 mt-16">Unlock a world of a variety culinary recipes and unleash your inner chef the easy way with Flavoris.</p>

                    <div className="grid grid-cols-2 gap-4 w-96">
                        <Link to="/recetas/receta/nueva" className="text-center py-3 border-1 border-white text-white rounded-full">Agregar Recetas</Link>
                        <Link to="/recetas" className="text-center py-3 bg-white text-black  rounded-full">Ver Recetas</Link>
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
                        animation: slideUp 2s ease-in-out infinite;
                        animation-delay: 4s; /* Retarda la animación en 1 segundo */
                    }
                `}
            </style>
        </>
    )
}
