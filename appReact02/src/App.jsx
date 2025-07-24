import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import ProvaState from '../components/ProvaState'
import CardForm from '../components/CardForm'

function App() {
  const [count, setCount] = useState(0)
  const [birds, setBirds] = useState([
    {
      id: 0,
      nome: "Tucano",
      description: "Are you Toucan to me?",
      imgURL: "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spotted: false,
      comment: "I tucani della Guinness"
    },
    {
      id: 1,
      nome: "Flamingo",
      description: "Come sono belli i fenicotteri",
      imgURL: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spotted: false,
      comment: "Balliamo un flamenco ??"
    },
    {
      id: 2,
      nome: "Parrot",
      description: "Ti va di fare una chiacchierata ? ",
      imgURL: "https://images.unsplash.com/photo-1538440367084-0a21cb983cee?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spotted: false,
      comment: "Cu cu chaaaaaa"
    },
    {
      id: 3,
      nome: "Pulcinella",
      description: "Non è napoletano ma comunque è bellissimo",
      imgURL: "https://images.unsplash.com/photo-1499054488849-3dd812295ef0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spotted: true,
      comment: "We we"
    }
  ]);


  // Questa funzione usata nel prop di CardForm prende un newBird in ingresso. Questo newBird vive nel child non nel parent
  const addBird = (newBird) => {
      setBirds([...birds, newBird]);
  }


  function handleSubmit(formData){
    //L'uso di preventDefault() è necessario poiché siamo in una libreria fatta per costruire delle SPA(Single Page Application).
    //Quindi la mia app non deve mai ricaricare la pagina
    //event.preventDefault();
    
    const bird = {
            id: formData.get("id"),
            nome: formData.get("nome"),
            description: formData.get("description"),
            imgURL: formData.get("url"),
            spotted: false,
            comment: formData.get("comment")
        }
        
        addBird(bird);  
    //console.log(event);
  }

  return (
    <>

      <h1>Vite + React</h1>

      <Navbar></Navbar>


      {/*map è l'unica alternativa al forEach in React*/}
      <div className='card-container'>
      {birds.map((bird) => (
        <Card
          key = {bird.id}
          title = {bird.title}
          imgUrl = {bird.imgURL}
          description = {bird.description}
          spotted = {bird.spotted}>
            {bird.comment}
        </Card>
      ))}
      </div>

      <h2>Raccolta Avvistati</h2>

      <div className="card-container">

        {birds
        .filter(bird => bird.spotted)
        .map((bird => (
          <Card
          key = {bird.id}
          title = {bird.title}
          imgUrl = {bird.imgURL}
          description = {bird.description}
          spotted = {bird.spotted}>
            {bird.comment}
        </Card>
        )))}

      </div>

      <h1>Eventi</h1>
      {/* Parto con la gestione di eventi attraverso funzioni anonime */}

      <div className="card-container">
        <div className="card">
          <button onClick={() => {
            setCount(count => count + 1)
          }}>
            Contatore : {count}
          </button>
        </div>

        <div className="card">
          {/* Gestire un evento submit su un piccolo form*/}
          <form action={handleSubmit}>
            <input type="number" name="id" id="id"/>
                <input type="text" name="name" id="name"/>
                <input type="text" name="description" id="description"/>
                <input type="text" name="url" id="url"/>
                <input type="text" name="comment" id="comment"/>

            <button type='submit'>Submit</button>
          </form>


        </div>
        
        <br />
        <h3>Use State</h3>
        <hr />
          
        <div className="card-container">
            <ProvaState></ProvaState>
        </div>

        

      </div>

      <div className="card-container">
        {/*       propCHILD = propParent */}
        <CardForm addBird={addBird}></CardForm>
      </div>

    </>
  )
}

export default App

