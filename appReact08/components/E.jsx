import {useState} from 'react'

function E({initial, id, text, visible, setInitial, date}){

    const handleSubmit = ()=>{
        const remaining = initial.filter((element) => element.id !== id);
        setInitial([...remaining]);
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