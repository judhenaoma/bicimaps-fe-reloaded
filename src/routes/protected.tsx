// import { AppRoute, AppRoutes } from "./app"
import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { MainLayout } from "@/components/Layout"
import { type RouteObject } from "react-router-dom"


const Map = lazy( () => import("@/features") )


const ProtectedRoutes = () => {

    return (
        <MainLayout>
            <Suspense fallback = {
                <div className="h-full w-full flex items-center justify-center">
                Cargando...
                </div>
            }>
                <Outlet/>
            </Suspense>
        </MainLayout>
    )
}

export const  protectedRoutes : RouteObject[] = [

    {
        path : '/app',
        element : <ProtectedRoutes/>,
        children : [
            {
                path : '/map',
                element : <Map />
            }
        ]
        
    }
]