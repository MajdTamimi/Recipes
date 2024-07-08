import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;