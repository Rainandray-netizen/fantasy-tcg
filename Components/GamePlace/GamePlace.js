import React from 'react'
import PlayerHand from '../PlayerHand/PlayerHand'
import {View,Text} from 'react-native'
import gamePlaceStyles from '@components/GamePlace/GamePlaceStyles'

const GamePlace = ()=>{

  return(
    //top of screen
    <View style={gamePlaceStyles.gamePlaceWrapper}>
      <Text>
        enemy here
      </Text>
    {/* //play area goes here */}
      <Text>
        play cards here
      </Text>
      <PlayerHand />
    </View>
  )
}

export default GamePlace