import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Layouts/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='header'> 
       <h1 className='h1'>Aqui estará o Cabeçalho</h1>
    </header>

    <body>
      <p className='p'>Aqui estará o Conteúdo</p>
    </body>
    
    <Footer />
      
    </>
  )
}

export default App
