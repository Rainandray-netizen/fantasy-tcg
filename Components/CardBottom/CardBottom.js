import React from 'react'
import {View, Text} from 'react-native'
import CardBottomStyles from '@components/CardBottom/CardBottomStyles'
import CardCircle from '@components/CardCircle/CardCircle'

const CardBottom = (props) => {
  const {atk, def} = props

  return(
    <View style={CardBottomStyles.bottomWrapper}>
      <CardCircle val={atk} color='red'/>
      <CardCircle val={def} color='blue'/>
    </View>
  )
}

export default CardBottom