import React from 'react'

import home1 from '../../images/home1.webp'

const FillerImage = (props) => {
    return (
    <>
       <div 
        class="card border-0 rounded-0 bg-dark"  
        // style={{height: '50%'}}
       >
        <img class="card-img img-fluid" src={props.image || home1} 
        style={{height: '100%', width: '100%'}}  
        alt="Card" />
        <div class="card-img-overlay">
            <h1 class="card-title">{props.cardTitle}</h1>
            {(props.buttonText) ? (
            <a href class="btn btn-outline-info rounded-pill">{props.buttonText}</a>
            ) : (<></>)}
        </div>
        </div>
    </>
    )
}

export default FillerImage