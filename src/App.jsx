import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
