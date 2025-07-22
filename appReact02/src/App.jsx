import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0)

    const birds = [
    {
      id: 0,
      nome: "Tucano",
      description: "Are you Toucan to me?",
      imgURL: "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: true,
      comment : "I tucani della Guinness"
    },
    {
      id: 1,
      nome: "Flamingo",
      description: "Come sono belli i fenicotteri",
      imgURL: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: false,
      comment : "Balliamo un flamenco ?"
    },
    {
      id: 2,
      nome: "Parrot",
      description: "Ti va di fare una chiacchierata ? ",
      imgURL: "https://images.unsplash.com/photo-1538440367084-0a21cb983cee?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: true,
      comment : "Parrot"
    }
  ]

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
                {/* Questo è il children */} Tucano
        </Card>
        {/*
        <Card title = "Flamingo"
              imgUrl = "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description = "Are you Flamingo to me?">
                } Flamingo
        </Card>

        <Card title = "Parrot"
              imgUrl = "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description = "Are you Parrot to me?">
                } Parrot
        </Card>*/}
      </div>

      {/*map è l'unica alternativa al forEach in React*/}
      <div className='card-container'>
      {birds.map((bird) => (
        <Card
          key = {bird.id}
          title = {bird.title}
          imgUrl = {bird.imgURL}
          description = {bird.description}
          isSpotted = {bird.isSpotted}>
            {bird.comment}
        </Card>
      ))}
      </div>
      
      <h2>Raccolta Avvistati</h2>

      <div className="card-container">

        {birds
        .filter(bird => bird.isSpotted)
        .map((bird => (
          <Card
          key = {bird.id}
          title = {bird.title}
          imgUrl = {bird.imgURL}
          description = {bird.description}
          isSpotted = {bird.isSpotted}>
            {bird.comment}
        </Card>
        )))}

      </div>
    </>
  )
}

export default App

