// Per adesso questo form è finto, cioè non prende ancora i dati partendo dai campi input.

//OSS. In questo file spiego come è possibile passare dei dati dal CHILD -> PARENT

function CardForm({addBird}){ //questo è un prop

    function handleClick () {
        const bird = {
            id: 4,
            nome: "Ara Ara",
            description: "Bellissimo e magnifico",
            imgURL: "https://images.unsplash.com/photo-1622926152955-252ec2809632?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isSpotted: true,
            comment: "Obrigada!!"
        }
        
        addBird(bird);        
    }

    return(
        <div className="card">
            <h3>Aggiungi</h3>

            <form action={handleClick}>
                <input type="text" name="name"/>
                <input type="text" name="description"/>
                <input type="text" name="url"/>
                <input type="text" name="comment"/>
                <button type="submit"> Aggiungi Volatile</button>
                
            </form>
        </div>
    )
}

export default CardForm