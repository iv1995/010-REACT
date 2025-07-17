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
        <Card title = "Tucano"
              imgUrl = "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description = "Are you Toucan to me?">
        </Card>

        <Card title = "Flamingo"
              imgUrl = "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description = "Are you Flamingo to me?">
        </Card>

        <Card title = "Parrot"
              imgUrl = "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description = "Are you Parrot to me?">
        </Card>
      </div>
    </>
  )
}

export default App

