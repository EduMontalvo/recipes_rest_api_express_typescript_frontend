import Hero from "../components/Hero";
import MiddleSection from "../components/MiddleSection";
import PopularRecipes from "../components/PopularRecipes";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <MiddleSection />
                <PopularRecipes />
            </main>
        </>
    )
}
