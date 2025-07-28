import {useState, useEffect} from 'react'

function FormToDoList({addNew}){

      const handleSubmit = (event) => {

        event.preventDefault();
        
        const newE = {
            id:Math.floor(Math.random()*100), 
            text: event.target[0].value,
            visible:true,
            date: "28-07-2025"
        }

        console.log(newE)
        addNew(newE);
    }

    // const [newE, setNewE] = useState({id:10, text: "sometext", visible:true, date:"28-07-2025"});

    // const handleSubmit = (event) => {

    //     event.preventDefault();
        
    //     setNewE({id:10, text: event.target[0].value, visible:true, date:"28-07-2025"});
    // }

    // useEffect(() => 
    // //uso la fetch con il metodo post per registrare un viaggio nel carrello
    // fetch("http://localhost:3000/todo", { method: "POST", headers: { "Content-Type": "application/json" },
    //     //dentro il body passo l'oggetto formato json (string) che voglio registrare
    //     body: JSON.stringify(newE)
    // })
    // .then(data =>{
    //     console.log(data);
    // }), [newE]);


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="new"/>
                <button type="submit">Aggiungi</button>
            </form>
        </>
    )
}

export default FormToDoList