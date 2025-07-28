import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial, setInitial}){
    
    return (
        <>
            {
                initial.map(elm => (
                        
                         <E 
                             initial={initial}
                             position={elm.position}
                             text={elm.text}
                             visible={elm.visible}
                             date={elm.date}
                             setInitial={setInitial}>
                         </E>))
            }
        </>
    )
}

export default ToDoList