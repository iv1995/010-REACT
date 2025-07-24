function FormProva(){

    const [user, setUser] = useState({
        nome : "", 
        cognome : ""});

    const handleChange = (e) => {
        //name e value sono rispettivamente la chiave e la chiave dei
        const {name, value}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    }


    return (
        <>
            <div className="card">
                <form noSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="" />
                    <label htmlFor="cognome">Cognome</label>
                    <input type="text" name="cognome" id="" />
                    <input type="submit" value="Invia" />
                </form>
            </div>
        </>
    )
}

export default FormProva