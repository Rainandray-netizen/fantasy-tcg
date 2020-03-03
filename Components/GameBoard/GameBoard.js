import React from 'react'
import { View, Text } from 'react-native'
import GameBoardStyles from './GameBoardStyles'
import CurrentPlayerBoard from '@components/CurrentPlayerBoard/CurrentPlayerBoard'
import EnemyBoard from '@components/EnemyBoard/EnemyBoard'

const GameBoard = (props) =>{
  const {boardState, boardDispatch} = props

  return(
    <View style={GameBoardStyles.gameBoardContainer}>
      <EnemyBoard enemyState={boardState} enemyDispatch={boardDispatch} />
      <CurrentPlayerBoard playerState={boardState} playerDispatch={boardDispatch} />
    </View>
  )
}

export default GameBoard