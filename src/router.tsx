import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Recipes, { loader as recipeLoader } from "./views/Recipes";
import NewRecipe, { action as newRecipeAction} from "./views/NewRecipe";
import Home from "./views/Home";
import EditRecipe from "./views/EditRecipe";

export const router = createBrowserRouter([
    {
        path: '/recetas',
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Recipes/>,
                loader: recipeLoader
            },
            {
                path: 'nueva',
                element: <NewRecipe/>,
                action: newRecipeAction
            },
            {
                path:'editar',
                element: <EditRecipe/>
            }
        ]
    },
    {
        path:'/',
        element: <Home/>
    }
]) 