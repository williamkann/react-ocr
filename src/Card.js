import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onclick }) => (

    <div className={`card ${feedback}`} onClick={() => onclick(card)}>
        {true && 
            <span className="symbol">
                {feedback === 'hidden' ? HIDDEN_SYMBOL : card }
            </span> 
        }
    </div>
)

export default Card