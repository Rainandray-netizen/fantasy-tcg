import React from 'react'
import {View,Text} from 'react-native'
import EnemyBoardStyles from './EnemyBoardStyles'

const EnemyBoard = (props) =>{
  const {enemyState,enemyDispatch} = props

  return(
    <View style={EnemyBoardStyles.boardHalfWrapper}>
      <Text>
        Enemy Board
      </Text>
    </View>

  )
}

export default EnemyBoard