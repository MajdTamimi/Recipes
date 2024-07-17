import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useEffect, useState } from "react";

function App() {
  
  const [userIn, setUserIn] = useState(localStorage.getItem("token") || false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserIn(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUserIn={setUserIn} />} />
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

export default App;