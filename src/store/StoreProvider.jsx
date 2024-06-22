import { createContext, useContext } from "react"
import { AuthStore } from "./AuthStore"
import { PlaceStore } from "./PlaceStore"
import { FactStore } from "./FactStore"
import { CommentStore } from "./CommentStore"

const authStore = new AuthStore()

const placeStore = new PlaceStore()

const factStore = new FactStore()

const commentStore = new CommentStore()

const stores = {
    authStore,
    placeStore,
    factStore, 
    commentStore
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