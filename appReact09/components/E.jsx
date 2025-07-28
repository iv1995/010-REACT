import {useState, useEffect} from 'react'

function E({initial, id, text, visible, setInitial, date, setDel}){

    const handleSubmit = ()=>{
        const remaining = initial.filter((element) => {element.id !== id});
        console.log(id);
        setInitial([...remaining]);
        setDel(id);
    }

    // useEffect(() => {

    //     // const obj = {"id":id, "text":text, "visible":visible, "date":date};

    //     const URL = "http://localhost:3000/todo/" + id;
    //     fetch(URL, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(data =>{
    //         // console.log(data);
    //         console.log(id);
    //     })
    // }, []);

    return (
        <>

            <p>{text}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Nascondi</button>
        </>
    )
}

export default E