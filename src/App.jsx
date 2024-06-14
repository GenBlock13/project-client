import { Routes, Route } from "react-router-dom"
import { MainPage } from "./pages"
import { NotFoundPage } from "./pages"
import { Navbar, Page } from './components'
import { useEffect } from 'react'
import { useStore } from './store/StoreProvider'
import { observer } from 'mobx-react-lite'


function App() {

  const { authStore } = useStore()

  useEffect(() => {
    if(localStorage.getItem('token')) {
      authStore.checkAuth()
    }
  }, [authStore])

  if (authStore.isLoading) {
    return <div>Loading..</div>
  }
  return (
    <>
    <Navbar />
    <Page>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Page>
    </>
  )
}

export default observer(App)
