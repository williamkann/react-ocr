import React from 'react'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
        {entries.map(({id, date, guesses, player}) => (
            <tr key={id}>
                <td className="date">{date}</td>
                <td className="guesses">{guesses}</td> 
                <td className="player">{player}</td>
            </tr>
        ))}
    </tbody>
  </table>
)

export default HallOfFame

export const FAKE_HOF = [
    {id: 0, guesses: 18, date: '10/10/2020', player: 'Jane'},
    {id: 1, guesses: 40, date: '09/11/2020', player: 'Jean'},
    {id: 2, guesses: 1, date: '24/04/2020', player: 'William'},
    {id: 3, guesses: 8, date: '10/07/2020', player: 'Marine'}
]