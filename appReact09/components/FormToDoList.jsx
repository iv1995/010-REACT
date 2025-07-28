import {useState, useEffect} from 'react'

function FormToDoList(){

    const [newE, setNewE] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
            setNewE({id:event.target[0].value, text: event.target[1].value, visible:true, date:new Date().toDateString()});
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
                <input type="text" name="id"/><br />
                <input type="text" name="new"/><br />
                <button type="submit">Aggiungi</button>
            </form>
        </>
    )
}

export default FormToDoList