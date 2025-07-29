import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial, setInitial, setDel}){
    
    return (
        <>
            {
                initial.map(elm => (
                        
                         <E 
                             initial={initial}
                             id={elm.id}
                             text={elm.text}
                             visible={elm.visible}
                             date={elm.date}
                             setInitial={setInitial}
                             setDel={setDel}>
                         </E>))
            }
        </>
    )
}

export default ToDoList