import {useState, useEffect} from 'react'

function E({initial, id, text, visible, setInitial, date}){

    const handleSubmit = ()=>{
        const remaining = initial.filter((element) => element.id !== id);
        console.log(id);
        setInitial([...remaining]);
    }

    useEffect(() => {
        const URL = "http://localhost:3000/todo/" + id;
        fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data =>{
            // console.log(data);
            console.log(id);
        })
    }, [handleSubmit]);

    return (
        <>

            <p>{text}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Nascondi</button>
        </>
    )
}

export default E