import {useState} from 'react'

function E({initial, position, text, visible, setInitial, date}){

    const handleSubmit = ()=>{
        const remaining = initial.filter((element) => element.position !== position);
        setInitial([...remaining]);
    }


    return (
        <>

            <p>{text}</p>
            <p>{date.toDateString()}</p>
            <button onClick={handleSubmit}>Nascondi</button>
        </>
    )
}

export default E