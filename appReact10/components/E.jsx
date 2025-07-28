import {useState, useEffect} from 'react'

function E({initial, id, text, visible, setInitial, date, setDel}){

    const handleSubmit = (event)=>{
        event.preventDefault();

        const remaining = initial.filter((element) => {element.id != id});
        setInitial([...remaining]);
        
        setDel(id);
        console.log(id);
    }

    return (
        <>
            <p>{text}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Nascondi</button>
        </>
    )
}

export default E