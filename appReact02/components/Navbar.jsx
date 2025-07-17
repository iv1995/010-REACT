import Link from './Link';
import './Navbar.css'

function Navbar(){

    let mioNome = 'Dario';

    /*text-decoration -> textDecoration camelCase perché le regole di stile vengono passate come oggetti*/
    let myStyle = {
        color : "red",
        textDecoration : "underline"
    }
    
    let x = 11;

    return(
        <>
            <ul>
                <li>
                    <Link></Link>
                </li>
                <li>
                    <Link></Link>
                </li>
                <li>
                    <Link></Link>
                </li>

                <li style={{fontSize: "20px", color : "blueviolet"}}>
                    {mioNome == "Dario" ? "Ciao " + mioNome : "Non ti conosco"}
                </li>

                <li style={myStyle}>
                    testo
                </li>

                {/*Adesso inserisco una classe. Non si utilizza più l'attributo class ma l'attributo className*/}
                <li className='textClasse'>
                    testo classe
                </li>

                {/*Applico la classe textClasse solo se la mia x > 10*/}
                <li className={x > 10 ? "textClasse" : ""}>
                    testo2
                </li>

                {/*Applico più classi di cui una dinamica. Si fa uso di Literals*/}
                <li className={`textFam ${x > 10 ? "textClasse" : ""}`}>
                    testo alternativo
                </li>
            </ul>
        </>
    )
}

export default Navbar;