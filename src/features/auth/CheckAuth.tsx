import { type ReactNode, useEffect } from "react"
import { handleStorage } from '@/utils/storage'
import { useAppContext } from "@/hooks/useAppContext"


type AuthProps = {
    children : ReactNode

}

export const CheckAuth = ({children } : AuthProps) => {

  const data = useAppContext()
  const { login, logout } = data
  
    useEffect(() => { 
        const token = handleStorage.getToken()
        if(token){
          login(token)
        }else{
          logout()
        }
        
    }, [login])

  return (
 <>{children}</>
  )
}
