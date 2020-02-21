import React, { useReducer, useContext } from 'react'
import {View} from 'react-native'
import Card from '@components/Card/Card'
import PlayerHandStyles from '@components/PlayerHand/PlayerHandStyles'
import Context from '../../contexts/context'
import Draggable from 'react-native-draggable'
import dims from '@constants/layout'


const PlayerHand = (props) => {

  const { width, height} = dims

  const context = useContext(Context)
  const [handState,dispatch] = useReducer(context.reducer,context.cardsInHand)

  context.dispatch = dispatch
  
  //draw cards in the beginning
  if(context.startToken){
    console.log('startToken found')
    context.dispatch({
      type:'DRAW_CARDS',
      payload:{
        shuffleFirst:true,
        draw: 5,
      },
    })
    context.startToken = 0
  }
  //end draw cards

  console.log({ handState })
  return(
      <View style={PlayerHandStyles.handContainer}>
        {handState.map((value,index)=> (
          <Draggable
            x={((width*0.8 / (handState.length))-(0.04*width)/handState.length)*index}

            //todo FIX this math

            shouldReverse={true}
            onDragRelease={(event)=>{
              // console.log(event.touchHistory.touchBank[1])
              const cardDrop = event.touchHistory.touchBank[1]
              // console.log('my x is ',cardDrop.currentPageX,' my y is ',cardDrop.currentPageY)
              console.log(cardDrop.startPageY,' to ',cardDrop.currentPageY)
              if(cardDrop.startPageY-cardDrop.currentPageY >= 0.35*height){
                context.dispatch({
                  type:'PLAY_CARDS',
                  payload:{
                    index,
                    value
                  }
                })
              }


            }}
            // z={onDrag={}}
          >
           <Card key={index} cardInfo={context.cardDataBase[value]} /> 
          </Draggable>
        ))}
      </View>
  )
}

export default PlayerHand