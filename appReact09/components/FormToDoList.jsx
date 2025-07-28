import {useState, useEffect} from 'react'

function FormToDoList(){

    const [newE, setNewE] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
            setNewE({id:100, text: event.target[0].value, visible:true, date:"28-07-2025"});
    }

    useEffect(() => {

        let i = false;
        
        fetch("http://localhost:3000/todo", { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newE)
        })
        .then(data =>{
            console.log(data);
        
        return () => {
            i = true;
        };
    }), []});


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="new"/>
                <button type="submit">Aggiungi</button>
            </form>
        </>
    )
}

export default FormToDoList