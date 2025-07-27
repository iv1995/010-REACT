import {useState} from 'react'
import E from '../components/E'

function ToDoList({initial, setInitial}){

    const remaining = initial;

    function changeVisibility(){
        const remaining = initial.filter((element) => element.position !== 1);
        setInitial(...remaining);
    }
    
    return (
        <>
            {
                initial.map(elm => (
                        
                         <E 
                             position={elm.position}
                             text={elm.text}
                             visible={elm.visible}
                             date={elm.date}
                             setInitial={changeVisibility}>
                         </E>))
            }
        </>
    )
}

export default ToDoList