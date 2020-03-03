import { StyleSheet } from 'react-native'
import layout from '@constants/layout'

const {height, width} = layout

const gamePlaceStyles = StyleSheet.create({
  gamePlaceWrapper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'flex-end',
    height: height,
    width: width,
    backgroundColor: 'blue',
  }
})

export default gamePlaceStyles