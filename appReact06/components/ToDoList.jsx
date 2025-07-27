import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial}){
    
    return (
        <>
            {
                initial.map((elm) => (
                        <E element={elm.text}>
                        </E>))
            }
        </>
    )
}

export default ToDoList