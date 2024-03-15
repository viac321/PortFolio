import "./App.css";
import { Route, Routes } from "react-router"
import Footer from "./assets/components/Footer";
import AboutMe from "./assets/pages/AboutMe";
import ContactMe from "./assets/pages/ContactMe";
import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Projects";
import Technologies from "./assets/pages/Technologies";
import { HashRouter } from "react-router-dom";
import BarNav from "./assets/components/BarNav";

//import  Prueba2  from "./assets/pages/Prueba2";




function App() {

  return (
    <>
      <HashRouter>

        {/*{isMaxSm ?  : } 
        {isMaxSm ? <HamButton /> : <NavBar/>}*/}
        <BarNav />
        <main className="bg-c-2 dark:bg-d-2 min-h-screen h-full" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
            {/* <Route path="/contact" element={<ContactMe />} /> */}
          </Routes>
        </main>
        <Footer />

      </HashRouter>

    </>
  );
}

export default App;
