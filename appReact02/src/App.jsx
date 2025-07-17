import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar></Navbar>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>{console.log("Ciao dal pulsantino!")}}>
          Pulsantino
        </button>
      </div>
    </>
  )
}

export default App

