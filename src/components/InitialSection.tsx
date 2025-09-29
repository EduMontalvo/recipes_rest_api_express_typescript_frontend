
export default function InitialSection() {
    return (
        <>
            <h1 className="text-5xl font-semibold mx-auto w-[90%] py-4">Nuestras recetas son reconocidas a nivel mundial</h1>
            <div className="flex max-w-[90%] mx-auto my-10 max-h-80">
                <div className="w-[40%]">
                    <img src="https://live.staticflickr.com/65535/51586461918_a3915f05d6_b.jpg" alt="" className="rounded-xl" />
                </div>
                <div className="px-5 w-[60%] max-h-[100%] flex flex-col justify-between items-start overflow-auto">
                    <h2 className="font-bold text-xl">La gente ama la comida peruana por su diversidad y calidad</h2>
                    <p>
                        La comida peruana es considerada una de las mejores del mundo gracias a su diversidad geográfica, que ofrece una amplia gama de ingredientes frescos, desde productos marinos de la costa hasta tubérculos y granos de la sierra y la selva. Esta riqueza se traduce en sabores y texturas incomparables. Además, la cocina peruana es un crisol de influencias culturales, fusionando tradiciones indígenas con aportes de inmigrantes europeos, africanos y asiáticos. Platos emblemáticos como el ceviche y el lomo saltado reflejan esta mezcla, destacándose por su frescura, acidez y técnicas innovadoras.
                    </p>
                    <button className="bg-orange-400 text-white px-16 py-2 rounded-lg uppercase font-semibold">ver recetas</button>
                </div>
            </div>
            <div className="w-[90%] mx-auto h-96  my-28 relative">
                <img src="https://i.imgur.com/2KksSC6.jpeg" alt="" className="rounded-xl h-full w-full object-cover absolute" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-semibold text-center" >Cocinar nunca fue asi de <p className="text-orange-400 inline-block">facil</p></h2>
            </div>
        </>
    )
}
