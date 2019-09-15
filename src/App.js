import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utlites/css/font-awesome.min.css';

import NavBar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Header from './components/Header';

import './App.css';
import Categories from './components/Categories';
import Features from './components/Features';
import Footer from './components/Footer';
import MainSlider from './components/MainSlider';
import Copyright from './components/Copyright';
import PanoramaSection from './components/PanoramaSection';
import OurProducts from './components/OurProducts';


function App() {
  return (
    <>
    <NavBar/>
    <BottomNavbar/>
   
     <Header/>
     
    <Categories/>
    
    <PanoramaSection/>
    
    <OurProducts/>
    
    

    <Features/>
   
    <MainSlider/>
     
    <Footer/>
    
    <Copyright/>
    
    </>
  );
}

export default App;
