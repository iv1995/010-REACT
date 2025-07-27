import {useState} from 'react'

function E({position, text, visible, setInitial, date}){


    return (
        <>

            <p>{text}</p>
            <p>{date.toDateString()}</p>
            <button onClick={setInitial}>Nascondi</button>
        </>
    )
}

export default E