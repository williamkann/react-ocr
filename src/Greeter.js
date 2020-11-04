import React from 'react'

const Greeter = ({ whom="Roberto" }) => (
    <button onClick={() => console.log(`Bonjour ${whom} !`)}>test</button>
)


export default Greeter