import React from 'react';
import Card from './Cards/Card.js';

const cards = (props) => {
    console.log('[Cards]'.props)
    const cards = props.data.map(card =>{

    
    return(
            <Card 
                titulo={card.title}
                contenido = {card.contenido}
                responsable = {card.responsible}
            />
        
    );
    });
    return(
        <div>
            {cards}

        </div>
    )
}


export default cards;