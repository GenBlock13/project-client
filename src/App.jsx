import { Routes, Route } from "react-router-dom"
import { MainPage, NotFoundPage, AddPlacePage } from "./pages"
import { Navbar, Page } from './components'
import { useEffect } from 'react'
import { useStore } from './store/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Footer } from './components'


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
        <Route path="/add-place" element={<AddPlacePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Page>
    <Footer />
    </>
  )
}

export default observer(App)
