import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Todo from "./web-projects/Todo";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="todo" element={<Todo/>}/>

    </Routes>
    </BrowserRouter>
   
    </>
  );
}


export default App;
