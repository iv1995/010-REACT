import {useState} from 'react'

function E({position, text, visible : isVisible}){

    const [visible, setVisible] = useState(isVisible);

    function changeVisibility(){
        setVisible((visible) => !visible);
    }

    return (
        <>
            <p>{text}</p>
            <button className='btn btn-primary' onClick={changeVisibility}>Nascondi</button>
        </>
    )
}

export default E