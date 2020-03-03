import { createContext } from 'react'
import { cardDataBase } from '@decks/cardDataBase'
import { deck1 } from '@decks/deck1'

export const initialState = {
  cardDataBase,
  player1Deck: deck1,
  startToken: 1,
  // shufflePile:[],
  contextCardsInHand:[],
  player1CardsOnBoard:[],
  player1HP: 20,
  handShowing: true,
  player1Mana:1,
  player1MaxMana:1,
  player1Turn:true,
  player2CardsInHand:[],
  player2CardsOnBoard:[],
  player2HP:20,
  player2Mana:0,
  player2MaxMana:1,
}

const shuffleDeck = (deck)=>{
  for(let i=deck.length-1;i>0;i--){
    let j = Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]]
  }
  console.log('shuffled deck ',deck)
  return deck
}

const reducer = (state, action)=>{
  const nextState = {
    ...state,
    // player1Deck: [...state.player1Deck],
    // contextCardsInHand: [...state.contextCardsInHand],
    startToken: 0,
    // player1CardsOnBoard:[...state.player1CardsOnBoard],

  }

  console.log('nextState before changes: ',nextState)

  switch(action.type){
    case 'NEXT_TURN':
      nextState.player1Turn=!nextState.player1Turn
      if(nextState.player1Turn&&nextState.player1MaxMana<10){
        nextState.player1MaxMana++
        nextState.player1Mana = nextState.player1MaxMana
      }else{
        nextState.player2MaxMana++
        nextState.player2Mana = nextState.player2MaxMana
      }
      return nextState
    case 'DRAW_CARDS':
      const { shuffleFirst, draw } = action.payload

      if(shuffleFirst){
        // console.log('imma shuffle this real quick')
        nextState.player1Deck = shuffleDeck([...state.player1Deck])
      }

      console.log("DRAWING CARDS")
      for(let c = 0;c < draw;c++){
        if(nextState.player1Deck.length>0 && nextState.contextCardsInHand.length<9){
          console.log('card drawn')
          nextState.contextCardsInHand.push(nextState.player1Deck.pop())
        }else if(nextState.player1Deck.length===0){
          console.log('no cards left in deck')
        }else if(nextState.contextCardsInHand.length>=9){
          console.log('maximum hand size is 8')
        }
        // return defaultContext.player1Deck.map(card=>card)
      }

      // console.log('cards in hand ', nextState.contextCardsInHand)
      return nextState
    case 'PLAY_CARDS':
      const { index, value } = action.payload

      // console.log(value, ' has been played from index ', index)

      const removedCard = state.contextCardsInHand.splice(index,1)

      // console.log('removed item ', removedCard)
      // console.log('remaining cards in hand ', contextCardsInHand)

      nextState.contextCardsInHand = [...state.contextCardsInHand]

      nextState.player1CardsOnBoard = [...state.player1CardsOnBoard,...removedCard]

      return nextState
    case 'TOGGLE_HAND':
      nextState.handShowing = !state.handShowing
      console.log('hand showing: ',nextState.isToggled)
      return nextState
    default:
      return state
  }
}

export default reducer