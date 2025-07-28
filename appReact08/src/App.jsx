import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import E from '../components/E'
import FormToDoList from '../components/FormToDoList'
import ToDoList from '../components/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [initial, setInitial] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/todo").then(data => {return data.json()}).then(response =>  {console.log(response); setInitial([...response])});
  },[]);

  const addNew = (newE) => {
      setInitial([...initial, newE]);
  }


  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <FormToDoList addNew={addNew}></FormToDoList>
      <ToDoList initial={initial} setInitial={setInitial}></ToDoList>
    </>
  )
}

export default App
