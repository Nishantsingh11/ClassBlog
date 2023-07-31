import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticalLIst from "./pages/ArticalLIst";
import Navbar from "./pages/Navbar";
import About from "./pages/About";


function App() {
  return (
   <>

   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/artical" element = { < ArticalLIst />} /> 
      <Route path = "/about" element = {<About />} />
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
