import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import MyTechStack from './Components/TeachStack/MyTechStack';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar/>
      <Hero></Hero>
      <MyTechStack></MyTechStack>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;