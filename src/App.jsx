import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';

const App = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar/>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default App;