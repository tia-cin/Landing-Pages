import React from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='w-full h-screen p-0 m-0 bg-light-gray text-black'>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
