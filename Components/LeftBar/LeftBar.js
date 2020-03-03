import React from 'react'
import { View } from 'react-native'
import LeftBarStyles from './LeftBarStyles'
import PlayerCorner from '@components/PlayerCorner/PlayerCorner'

const LeftBar = (props) =>{
  const { leftBarState, leftBarDispatch} = props

  return(
    <View style={LeftBarStyles.leftBarContainer}>
      <PlayerCorner cornerState={leftBarState} cornerDispatch={leftBarDispatch}/>
    </View>
  )
}

export default LeftBar