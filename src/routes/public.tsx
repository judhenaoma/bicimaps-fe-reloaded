import { Home } from "@/features/home"
import { type RouteObject } from "react-router-dom"

export const publicRoutes : RouteObject[] = [
    {
        path : 'home',
        element : <Home /> 
    }
]