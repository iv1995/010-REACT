import './Card.css'

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
function Card(props){
    const title = props.title;
    const description = props.description;
    const imgUrl = props.imgUrl;

    return (
            <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt="" />
            </div>

            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>

    )
}

export default Card