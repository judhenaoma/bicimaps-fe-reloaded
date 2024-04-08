import { BackendAuthResponse } from "@/types"

const prefix : string = "bicimaps_app_token"

export const handleStorage = {

    getToken : () : BackendAuthResponse | null  => (JSON.parse(window.localStorage.getItem(`${prefix}`) as string)),

    setToken : (token : BackendAuthResponse) => {
        window.localStorage.setItem(prefix, JSON.stringify(token))
    },
    clearToken : () => {
        window.localStorage.removeItem(prefix)
    }
}

