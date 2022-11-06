import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';



function App() {
  const [ischecked, setIsChecked] = useState(false);
  const callback=(checked)=>{
    return setIsChecked(checked);;
   }
   
  return (
    <BrowserRouter>
    <Navbar callback ={callback} ischecked = {ischecked}/>
    {/* callback ={callback} */}
    <Footer callback ={callback} ischecked = {ischecked}/>
  <Routes>
   <Route path='/' element={<Home ischecked={ischecked}/>}/>
   <Route path='/About' element={<About ischecked={ischecked}/>}/>
   <Route path='/Skills' element={<Skills ischecked={ischecked}/>}/>
   <Route path='/Works' element={<Works ischecked={ischecked}/>}/>
   <Route path='/Contact' element={<Contact ischecked={ischecked}/>}/>
  </Routes>
   </BrowserRouter>
  );
}

export default App;
