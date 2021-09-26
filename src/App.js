import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Photos from './components/Photos';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <Photos />
      <Footer />
    </>
    );
}

export default App;
