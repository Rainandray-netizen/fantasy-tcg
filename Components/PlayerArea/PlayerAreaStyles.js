import { StyleSheet } from 'react-native'
import dims from '@constants/layout'

const {width, height} = dims

const PlayerAreaStyles = StyleSheet.create({
  playerAreaContainer: {
    width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    position:'absolute',
    bottom:0,
    left:0,
  },
  playerAreaContainerBG:{
    width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    bottom:0,
    left:0,
    // zIndex:7,
    position:'absolute',

  }
})

export default PlayerAreaStyles