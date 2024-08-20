import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState(0);

  const sevedName = (event) =>{
    setNumber = (event.target.value);
  };

  const sevedNumber = (event) =>{
    setNumber = (event.target.value);
  };

  const sevedButton = () =>{
    console.log('Texto:', savedName);
    console.log('Número:', savedNumber);
  };

  return (
    <>
      <h1>Agenda telefonica</h1>
      <div className='container'>
        <input  onChange={savedName} type="text" />
        <input  onChange={savedNumber} type="number" />
        <button>Agendar</button>
      </div>
    </>
  )
}

export default App
