import {useState, useEffect} from 'react'

function FormToDoList({setNewElement}){

    const handleSubmit = (event) => {
        event.preventDefault();
            setNewElement({id:event.target[0].value, 
                     text: event.target[1].value, 
                     visible:true, 
                     date:new Date().toDateString()});
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id"/><br />
                <input type="text" name="new"/><br />
                <button type="submit">Aggiungi</button>
            </form>
        </>
    )
}

export default FormToDoList