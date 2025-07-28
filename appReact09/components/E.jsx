import {useState, useEffect} from 'react'

function E({initial, id, text, visible, setInitial, date}){

    const handleSubmit = ()=>{
        const remaining = initial.filter((element) => element.id !== id);
        setInitial([...remaining]);
    }

    useEffect(() => {
        fetch("http://localhost:3000/todo/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data =>{
            console.log(data);
        })
    }, []);

    return (
        <>

            <p>{text}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Nascondi</button>
        </>
    )
}

export default E