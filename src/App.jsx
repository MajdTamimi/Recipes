import ProtectedRoutes from "./utils/ProtectedRoutes"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { Login, Register, Home, Recipes, Details, NotFound } from "./pages/index"

function App() {
  const [userIn, setUserIn] = useState(localStorage.getItem("token") || false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setUserIn(true)
    }
  }, [])

  return (
    <div>
      <ToastContainer position="top-center" theme="colored" />
      <BrowserRouter>
        {userIn && <Navbar setUserIn={setUserIn} />}
        <Routes>
          <Route path="/login" element={<Login setUserIn={setUserIn} />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes userIn={userIn} />}>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/details/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App