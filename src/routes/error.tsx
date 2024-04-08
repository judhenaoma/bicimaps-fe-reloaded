import { Navigate } from "react-router-dom"
import { type RouteObject } from "react-router-dom"
    



export const errorRoutes : RouteObject[] = [
    {
        path : '/',
        element : <Navigate  to={'/home'}/>
    },

    {
        path : '*',
        element : <Navigate to={'/home'} /> 
    }

]


