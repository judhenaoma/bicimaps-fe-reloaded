import { type ReactNode, type SetStateAction, createContext, useState } from "react";
import { UserDetail, NoticeInfo, BackendAuthResponse } from "@/types";
import { CheckAuth } from "@/features";
import { BrowserRouter } from "react-router-dom";
import { handleStorage } from "@/utils/storage";


export interface AppState {
  loggedIn : boolean,
  user : UserDetail | null,
  setUser : (user : SetStateAction<UserDetail | null>) => void,
  authTokens : BackendAuthResponse | null,
  notice : NoticeInfo,
  setNotice : (notice : SetStateAction<NoticeInfo>) => void
  login : (token : BackendAuthResponse) => void 
  logout : () => void
  showNotification : (notification : NoticeInfo) => void
}

type AppProviderProps = {
  children : ReactNode
}

export const appContext = createContext<AppState | undefined>(undefined)

export const AppProvider = ({ children } : AppProviderProps) : JSX.Element => {

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserDetail | null>(null);
  const [authTokens, setAuthTokens] = useState<BackendAuthResponse | null>(null);
  const [notice, setNotice] = useState<NoticeInfo>({ show: false, type: null, content: null });

  const login = (token : BackendAuthResponse) => {
    setLoggedIn(true);
    setAuthTokens(token)
    handleStorage.setToken(token)
  }
    
  const logout = () => {
    setLoggedIn(false)
    setAuthTokens(null)
    handleStorage.clearToken()
  }

  const showNotification  = (notification : NoticeInfo) => {
    setNotice(notification)
  }

  
  return (
    <appContext.Provider
      value={{loggedIn, login, user, authTokens, setUser, notice, setNotice, logout, showNotification }}
    >
      <CheckAuth>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </CheckAuth>
    </appContext.Provider>
  )
}
