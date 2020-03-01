import React from 'react'
import {View} from 'react-native'
import Card from '@components/Card/Card'
import PlayerHandStyles from '@components/PlayerHand/PlayerHandStyles'
import Draggable from 'react-native-draggable'
import dims from '@constants/layout'
import { v4 as uuidv4 } from 'uuid'


const PlayerHand = (props) => {
  console.log('hand rerendered')
  const { width, height} = dims

  const { cardState, cardDispatch } = props
  // console.log('playerHand state is: ', cardState)
  const cardsInHand = cardState.contextCardsInHand || []
  console.log('the cards in hand are: ',cardsInHand)
  const xStart = () => {
    if(cardsInHand.length <= 4){
      return ((4-cardsInHand.length)/10)
    }else{
      return 0
    }
  }

  const xInc = () => {
    if(cardsInHand.length <= 4){
      return 0.2
    }else{
      return 6/(10*(cardsInHand.length-1))
    }
  }

  return(
      <View style={cardState.handShowing? PlayerHandStyles.handContainer : PlayerHandStyles.hideHand}>
        {cardsInHand.map((value,index)=> (
          <Draggable
            key={uuidv4()}
            x={(xStart()+xInc()*index)*width}
            // y={.1*height}
            shouldReverse={true}
            onDragRelease={(event)=>{
              // console.log(event.touchHistory.touchBank[1])
              const cardDrop = event.touchHistory.touchBank[1]
              // console.log('my x is ',cardDrop.currentPageX,' my y is ',cardDrop.currentPageY)
              // console.log(cardDrop.startPageY,' to ',cardDrop.currentPageY)
              if(cardDrop.startPageY-cardDrop.currentPageY >= 0.35*height){
                cardDispatch({
                  type:'PLAY_CARDS',
                  payload:{
                    index,
                    value
                  }
                })
              }
            }}
          >
           <Card key={index} cardInfo={cardState.cardDataBase[value]} /> 
          </Draggable>
        ))}
      </View>
  )
}

export default PlayerHand