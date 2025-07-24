import { useState } from 'react'
import './Card.css'

function Card({title, description, imgUrl, children}){
    const [spotted, setSpotted] = useState(false);
    
    function remove(){
        setSpotted((spotted) => !spotted);
    }

    return (
        <div className={`card ${spotted ? 'card-background-green' : 'card-background-red'}`}>
             <div className='card-image'>
                 <img src={imgUrl}/>
             </div>

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
                    {spotted ? "Avvistato" : "Non Avvistato"}
                </span>
            </div>

            <button onClick={remove}>
                Avvistato
             </button>
        </div>
    )
}

export default Card