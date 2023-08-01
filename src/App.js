import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticalLIst from "./pages/ArticalLIst";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import ArticalDeatiles from "./pages/ArticalDeatiles";


function App() {
  return (
   <>

   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/artical" element = { < ArticalLIst />} /> 
      <Route path = "/articaldetatil/:name" element =  { <ArticalDeatiles />} />
      <Route path = "/about" element = {<About />} />
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
