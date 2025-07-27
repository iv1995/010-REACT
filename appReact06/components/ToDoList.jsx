import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial}){
    
    return (
        <>
            {
                initial.map((elm) => (
                        <E 
                           position={elm.position}
                           text={elm.text}
                           date={elm.date}
                        >
                        </E>))
            }
        </>
    )
}

export default ToDoList