// Per adesso questo form è finto, cioè non prende ancora i dati partendo dai campi input.

//OSS. In questo file spiego come è possibile passare dei dati dal CHILD -> PARENT

function CardForm({addBird}){ //questo è un prop

    function handleClick (formData) {
        const bird = {
            id: formData.get("id"),
            nome: formData.get("nome"),
            description: formData.get("description"),
            imgURL: formData.get("url"),
            isSpotted: true,
            comment: formData.get("comment")
        }
        
        addBird(bird);        

        alert( formData.get("url"));
    }

    return(
        <div className="card">
            <h3>Aggiungi</h3>

            <form action={handleClick}>
                <input type="number" name="id" id="id"/>
                <input type="text" name="name" id="name"/>
                <input type="text" name="description" id="description"/>
                <input type="text" name="url" id="url"/>
                <input type="text" name="comment" id="comment"/>

                <button type="submit"> Aggiungi Volatile</button>
            </form>
        </div>
    )
}

export default CardForm