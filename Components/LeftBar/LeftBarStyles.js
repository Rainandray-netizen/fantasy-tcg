import { StyleSheet } from 'react-native'
import dims from '@constants/layout'

const { width, height} = dims

const LeftBarStyles = StyleSheet.create({
  leftBarContainer: {
    backgroundColor:'magenta',
    height,
    width:width*0.2,
    position: 'absolute',
    left:0,
    bottom:0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-end'
  }
})

export default LeftBarStyles