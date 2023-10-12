import { useState } from 'react';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import './App.css';

import { Outlet } from 'react-router-dom';

function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Header2 />
    
    <Outlet />
    
    <Footer />
    </>
  )
};

export default App2
