import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Inicio from "./pages/Inicio"
import Tour from "./pages/Tour"
import ProtectedRoute from "./components/ProtectedRoute"
import CrearFormulario from "./pages/CreateForm"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/formulario"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/crearformulario" 
          element={
            <ProtectedRoute>
              <CrearFormulario />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
