import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const LazyHome = lazy(() => import('./pages/Home/Home'))
const LazyLogin = lazy(() => import('./pages/Login/Login'))
const LazyRegistration = lazy(() => import('./pages/Registration/Registration'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="cadastro" element={<LazyRegistration />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
