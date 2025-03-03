import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Recipes from "./views/Recipes";
import NewRecipe from "./views/NewRecipe";
import Home from "./views/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Recipes/>
            },
            {
                path: 'receta/nueva',
                element: <NewRecipe/>
            }
        ]
    },
    {
        path:'home',
        element: <Home/>
    }
]) 