
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
 import About from './Components/About';
import Interest from './Components/Interest';
import Skills from './Components/Skills';
 import Projects from './Components/Project';
import Contact from './Components/Contact';
 import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
     <Home/>
    <About/>
   <Interest/>
    <Skills/>
    <Projects/>
    <Contact/>
     <Footer/>
    </>
  );
}

export default App;