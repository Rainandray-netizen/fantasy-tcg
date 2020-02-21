import React from 'react'
import {View, Text} from 'react-native'

const CardMiddle =(props)=>{
const {img_url, desc} = props

  return(
    <View>
      <Text>{img_url}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

export default CardMiddle