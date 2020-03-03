import React from 'react'
import { View,Text } from 'react-native'
import PlayerCornerStyles from './PlayerCornerStyles'
import HandToggle from '@components/HandToggle/HandToggle'

const PlayerCorner = (props) => {

  const { cornerState, cornerDispatch} = props

  return(
    <View style={PlayerCornerStyles.cornerContainer}>
      <Text>
        HP: {cornerState.player1Turn ? cornerState.player1HP : cornerState.player2HP}
      </Text>
      <Text>
        Mana: {cornerState.player1Turn ? 
        `${cornerState.player1Mana}/${cornerState.player1MaxMana}` : 
        `${cornerState.player2Mana}/${cornerState.player2MaxMana}`}
      </Text>
    <HandToggle handToggleState={cornerState} handToggleDispatch={cornerDispatch}/>
    </View>
  )
}

export default PlayerCorner