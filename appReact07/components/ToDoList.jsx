import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial}){

    
    
    return (
        <>
            {
                initial.filter(elm => elm.visible).map(elm => (
                        <E 
                            position={elm.position}
                            text={elm.text}
                            visible={elm.visible}>
                        </E>))
            }
        </>
    )
}

export default ToDoList