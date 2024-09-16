import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const LazyHome = lazy(() => import('./pages/Home/Home'))
const LazyLogin = lazy(() => import('./pages/Login/Login'))
const LazyRegistration = lazy(() => import('./pages/Registration/Registration'))
const LazyVehicleRegistration = lazy(() => import('./pages/VehicleRegistration/VehicleRegistration'))
const LazyGenerateDiagnosis = lazy(() => import('./pages/GenerateDiagnosis/GenerateDiagnosis'))
const LazyDiagnosisHistory = lazy(() => import('./pages/DiagnosisHistory/DiagnosisHistory'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/cadastrar" element={<LazyRegistration />} />
          <Route path="/cadastrar-veiculo" element={<LazyVehicleRegistration />} />
          <Route path="/diagnosticar" element={<LazyGenerateDiagnosis />} />
          <Route path="/historico" element={<LazyDiagnosisHistory />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
