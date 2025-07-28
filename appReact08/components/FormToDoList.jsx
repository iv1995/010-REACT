import {useState, useEffect} from 'react'

function FormToDoList({addNew}){

    const [newE, setNewE] = useState([{id:1, text: "sometext", visible:true, date:"28-07-2025"},
                                        {id:2, text: "sometext", visible:true, date:"28-07-2025"}
    ]);

    const handleSubmit = (event) => {

        event.preventDefault();
        setNewE({id:100, text: event.target[0].value, visible:true, date:"28-07-2025"});
    }

    useEffect(() => {
        let i = false;
        //uso la fetch con il metodo post per registrare un viaggio nel carrello
        fetch("http://localhost:3000/todo", { method: "POST", headers: { "Content-Type": "application/json" },
            //dentro il body passo l'oggetto formato json (string) che voglio registrare
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