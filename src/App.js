import './App.css'
import React from 'react'
import GuessCount from './GuessCount'
import Card from './Card'
import shuffle from 'lodash.shuffle'
import HallOfFame, {FAKE_HOF} from './HallOfFame'


const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends React.Component {

  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }
  
  handleCardclick(card) {
    console.log(`Show ${card}`)
  }
  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0}/>
        {this.cards.map((card, index) => (
          <Card key={index} card={card} feedback="visible" onclick={this.handleCardclick}></Card>
        ))}
        {won && <HallOfFame entries={FAKE_HOF}/>}
      </div>
    )
  }
}

export default App;
