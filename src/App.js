import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Footer/>
  <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/About' element={<About/>}/>
   <Route path='/Skills' element={<Skills/>}/>
   <Route path='/Works' element={<Works/>}/>
   <Route path='/Contact' element={<Contact/>}/>
  </Routes>
   </BrowserRouter>
  );
}

export default App;
