import React from 'react'
import { View, Text} from 'react-native'
import CardTopStyles from '@components/CardTop/CardTopStyles'
import CardCircle from '@components/CardCircle/CardCircle'

const CardTop = (props) =>{
  const {name, cost} = props

  return(
    <View style={CardTopStyles.cardTopWrapper}>
      <Text style={CardTopStyles.cardName}>{name}</Text>
      {cost && <CardCircle val={cost} color='grey'/>}
    </View>
  )
}

export default CardTop