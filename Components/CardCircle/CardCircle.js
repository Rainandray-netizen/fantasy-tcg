import React from 'react'
import { View, Text } from 'react-native'
import cardCircleStyles from '@components/CardCircle/CardCircleStyles'

const CardCircle= (props) =>{
  const { val, color } = props
  const cardcolor = cardCircleStyles[color]
  //use bracket notation instead of dot notation to access the cardCostCircleStyles object

  return(
    <View style={[cardCircleStyles.circleContainer, cardcolor]}>
      <Text style={cardCircleStyles.textColor}>
        {val}
      </Text>
    </View>
  )
}

export default CardCircle