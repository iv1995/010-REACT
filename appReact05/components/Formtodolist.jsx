import {useState} from 'react'
import E from "../components/E"

function FormToDoList(){

    const [initial, setInitial] = useState([{position: 1, text:"Some text"}]);

    const addNew = (newElement) => {
        setInitial(...initial, newElement);
    }

    function handleSubmit(event){

        const formData = new FormData(event.target);

        event.preventDefault();

        position = Math.floor(Math.random()*max);
        text = formData.get("new");
        newE = {position, text};

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