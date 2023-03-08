import React from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='w-full h-screen p-0 m-0 bg-light-gray text-black'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
