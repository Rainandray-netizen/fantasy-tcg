import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import CurrentPlayerBoardStyles from './CurrentPlayerBoardStyles'
import Card from '@components/Card/Card'
import { v4 as uuidv4 } from 'uuid'

const CurrentPlayerBoard = (props) => {
  const { playerState, playerDispatch} = props

  console.log('THE PLAYER STATE IS: ',playerState)
  return(
    <View style={CurrentPlayerBoardStyles.boardHalfWrapper}>
      {playerState.player1CardsOnBoard.map((value,index)=>{
        return(
          <TouchableOpacity style={{zIndex:9}}>
           <Card key={uuidv4()} cardInfo={playerState.cardDataBase[value]} /> 
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default CurrentPlayerBoard