import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
