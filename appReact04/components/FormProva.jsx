import {useState} from 'react'

function FormProva({stampaUser}){

    //Questo oggetto deve corrispondere alla struttura del form
    const [user, setUser] = useState({
        nome : "", 
        cognome : ""});

    const handleChange = (e) => {
        //name e value sono rispettivamente la chiave e la chiave dei singoli input del form
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value
        });

        // //Esempio di destructuring
        // const obj = {name: "Dario", age:36};
        // const nome = obj.nome;
        // const age = obj.age;
        // console.log(nome, age);

        // //Questo il modo nuovo utilizzando la destrutturazione
        // const {nome, age} = obj
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target[0].value);
        console.log(e.target[1].value);

        stampaUser(user);
    }


    return (
        <>
            <div className="card">
                <form noSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="" onChange={handleChange} value={user.nome}/>
                    <label htmlFor="cognome">Cognome</label>
                    <input type="text" name="cognome" id="" onChange={handleChange} value={user.cognome}/>
                    <input type="submit" value="Invia" />
                </form>
            </div>
        </>
    )
}

export default FormProva