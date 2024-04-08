import { useContext } from "react"
import { appContext } from "@/providers/AppProvider"


export const useAppContext = () => { 

    const data = useContext(appContext)

    if(!data){
        throw Error("Context doesnt already exists")
    }
    return data
}