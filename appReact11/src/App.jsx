import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import E from '../components/E'
import FormToDoList from '../components/FormToDoList'
import ToDoList from '../components/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [initial, setInitial] = useState([{id:"1", text:"someText", visible:true, date:"28-07-2025"}]);
  const [del, setDel] = useState(0);
  const [newE, setNewElement] = useState(null);

  useEffect(() => {

        let i = false;
        
        fetch("http://localhost:3000/todo", { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newE)
        })
        .then(data =>{
            // console.log(data);
            setNewElement(null);
        return () => {
            i = true;
        };
    }), []});
  
  
  useEffect(() => {
        
        const URL = "http://localhost:3000/todo/" + del;
        fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data =>{
            // console.log(data);
            console.log(del);
        })
    }, [del, setDel]);


  useEffect(() => {

    let i = false;
    
      setInitial([{id:"1", text:"someText", visible:true, date:"28-07-2025"}]);
    
    fetch("http://localhost:3000/todo")
    .then(data => {return data.json()})
    .then(response =>  {setInitial([...response])});

    return () => {
      i = true;
    };
  },[del, setDel]);


  
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

      <FormToDoList setNewElement={setNewElement}></FormToDoList>
      <ToDoList initial={initial} setInitial={setInitial} setDel={setDel}></ToDoList>
    </>
  )
}

export default App
