import React  from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Component/Layout/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons';

AOS.init();
 
function App() {
  
 
  return (
   <>
   <Home/>
   </>
  );
}

export default App;
