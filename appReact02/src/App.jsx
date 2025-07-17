import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>

      <Navbar></Navbar>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>{console.log("Ciao dal pulsantino!")}}>
          Pulsantino
        </button>
      </div>

      <hr />

      <div className='card-container'>
        <Card></Card>
      </div>
    </>
  )
}

export default App

