
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { errorRoutes } from "./error";
import { useAppContext } from "@/hooks/useAppContext";


export const AppRoutes = () => {

    const { loggedIn } = useAppContext()
    
    const routes = loggedIn ? protectedRoutes : publicRoutes

    const appRoutes = useRoutes([...routes, ...errorRoutes])

  return <>{appRoutes}</>

}


















