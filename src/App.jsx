import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
