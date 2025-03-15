import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Recipes, { loader as recipeLoader } from "./views/Recipes";
import NewRecipe, { action as newRecipeAction} from "./views/NewRecipe";
import Home from "./views/Home";
import EditRecipe, { loader as editrecipeLoader } from "./views/EditRecipe";

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
                path: 'receta/nueva',
                element: <NewRecipe/>,
                action: newRecipeAction
            },
            {
                path:'receta/:id/editar',
                element: <EditRecipe/>,
                loader: editrecipeLoader
            }
        ]
    },
    {
        path:'/',
        element: <Home/>
    }
]) 