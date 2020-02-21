import React from 'react'
import { View } from 'react-native'
import CardTop from '@components/CardTop/CardTop'
import CardMiddle from '@components/CardMiddle/CardMiddle'
import CardBottom from '@components/CardBottom/CardBottom'
import CardStyles from '@components/Card/CardStyles'
import Draggable from 'react-native-draggable'


const Card = (props) =>{

  const {cardInfo} = props

  console.log('da prrops', props)
  return(
      <View style={CardStyles.cardBody}>
        <View>
          <CardTop name={cardInfo.name} cost={cardInfo.cost}/> 
          <CardMiddle img_url={cardInfo.img_url} desc={cardInfo.desc}/>
        </View>
      {cardInfo.def && <CardBottom atk={cardInfo.atk} def={cardInfo.def}/>}
      </View>
  )
}

export default Card

//todo: add in the rest of the card props