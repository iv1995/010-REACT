import {useState} from 'react'
import E from "../components/E"

function FormToDoList({addNew}){

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const newE = {
            position:Math.floor(Math.random()*100), 
            text: event.target[0].value,
            visible:true
        }

        console.log(newE)
        addNew(newE);
    }

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