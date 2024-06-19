import { createContext, useContext } from "react"
import { AuthStore } from "./AuthStore"
import { PlaceStore } from "./PlaceStore"

const authStore = new AuthStore()

const placeStore = new PlaceStore()

const stores = {
    authStore,
    placeStore
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