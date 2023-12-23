import Projects from "./components/Projects";
import About from "./components/About";
import Controller from "./components/Controller";
import { BrowserRouter  , Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Controller/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
