import React from 'react'
import {View} from 'react-native'
import PlayerHand from '@components/PlayerHand/PlayerHand'
import PlayerCorner from '@components/PlayerCorner/PlayerCorner'
import PlayerAreaStyles from './PlayerAreaStyles'
import PlayerHandStyles from '../PlayerHand/PlayerHandStyles'

const PlayerArea = (props) => {

  const { areaState, areaDispatch} = props
  console.log('player area rerendered')
  
  return(
    <View style={areaState.handShowing ? PlayerAreaStyles.playerAreaContainer : PlayerHandStyles.playerAreaContainerBG}>
      <PlayerCorner cornerState={areaState} cornerDispatch={areaDispatch}/>
      <PlayerHand cardState={areaState} cardDispatch={areaDispatch}/>
    </View>
  )
}

export default PlayerArea