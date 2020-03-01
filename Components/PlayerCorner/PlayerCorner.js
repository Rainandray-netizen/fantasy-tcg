import React from 'react'
import { View,Text } from 'react-native'
import PlayerCornerStyles from './PlayerCornerStyles'
import HandToggle from '@components/HandToggle/HandToggle'

const PlayerCorner = (props) => {

  const { cornerState, cornerDispatch} = props

  return(
    <View style={PlayerCornerStyles.cornerContainer}>
      <Text>
        I'm the corner
      </Text>
    <HandToggle handToggleState={cornerState} handToggleDispatch={cornerDispatch}/>
    </View>
  )
}

export default PlayerCorner