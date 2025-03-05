import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Recipes from "./views/Recipes";
import NewRecipe, { action as AddNewRecipe} from "./views/NewRecipe";
import Home from "./views/Home";

export const router = createBrowserRouter([
    {
        path: '/recetas',
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Recipes/>
            },
            {
                path: 'nueva',
                element: <NewRecipe/>,
                action: AddNewRecipe
            }
        ]
    },
    {
        path:'/',
        element: <Home/>
    }
]) 