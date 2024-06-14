import { createContext, useContext } from "react"
import { AuthStore } from "./AuthStore"

const authStore = new AuthStore()

const stores = {
    authStore,
}

const Context = createContext({...stores})

export const StoreProvider = ({ children }) => {
    return <Context.Provider
    value={{...stores}}>{children}</Context.Provider>
}

export const useStore = () => {
    const {...stores} = useContext(Context)
    return {...stores}
}