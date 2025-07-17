import './Card.css'
import { useState } from 'react'

// function Card(){
    
//     const title = "Tucano";
//     const imgUrl = "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const description = "Questo è un Tucano";

//     return (
//         <div className="card">
//             <div className="card-image">
//                 <img src={imgUrl} alt="" />
//             </div>

//             <div>
//                 <h2>
//                     {title}
//                 </h2>
//                 <p>
//                     {description}
//                 </p>
//             </div>
//         </div>
//     )
// }

//In questo modo definisco delle properties che verranno valorizzate nel component Parent.
//Il dato esiste nel Parent.
// function Card(props){
//     const title = props.title;
//     const description = props.description;
//     const imgUrl = props.imgUrl;

//     return (
//             <div className="card">
//             <div className="card-image">
//                 <img src={imgUrl} alt="" />
//             </div>

//             <div>
//                 <h2>
//                     {title}
//                 </h2>
//                 <p>
//                     {description}
//                 </p>
//             </div>
//         </div>

//     )
// }

//In questa versione non passo una proprietà un parametro chiamato props ma passo direttamente un oggetto
// function Card({title, description, imgUrl}){
//     return (
//         <div className="card">
//              <div className="card-image">
//                  <img src={imgUrl} alt="" />
//              </div>

//              <div>
//                  <h2>
//                      {title}
//                  </h2>
//                  <p>
//                      {description}
//                  </p>
//              </div>
//          </div>
//     )
// }


//In questa versione utilizzerà una parola chiave che è children per poter raccogliere ciò che scrivo
//a mano nel parent all'interno del selettore child.
//Quindi children è una parola chiave non una semplice prop.

function Card({title, description, imgUrl, children}){
    const [isSpotted, setSpotted] = useState(true)    
    
    return (
        <div className={`{card ${isSpotted ? "card-background-green" : "card-background-red"}`}>
             <div className="card-image">
                 <img src={imgUrl} alt="" />
             </div>

            

             <button onClick={() => setSpotted((isSpotted) => !isSpotted)}>
                Avvistato
            </button>

             <div>
                 <h2>
                     {title}
                 </h2>
                 <p>
                     {description}
                 </p>
                 <p>Commento {children}</p>
             </div>

             <div>
                <span>
                    {isSpotted ? "Avvisato" : "Non Avvistato"}
                </span>
            </div>
        </div>
    )
}

export default Card