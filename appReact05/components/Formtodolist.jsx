import {useState} from 'react'
import E from "../components/E"

function FormToDoList(){

    const [initial, setInitial] = useState([{position: 1, text:"Some text"}]);

    const addNew = (newE) => {
        setInitial([...initial, newE]);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const newE = {
            position:Math.floor(Math.random()*100), 
            text: event.target[0].value
        }

        console.log(newE)
        addNew(newE);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="new"/>
                <button type="submit">Aggiungi</button>
            </form>

            <div className='card-container'>
                {
                    initial.map((elm) => (
                    <E element={elm.text}>
                    </E>))
                }
            </div>
        </>
    )
}

export default FormToDoList