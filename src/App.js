import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Items from './components/Items';
import About from './components/About';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <HomePage />
      <Items />
      <About />
    </>
    );
}

export default App;
