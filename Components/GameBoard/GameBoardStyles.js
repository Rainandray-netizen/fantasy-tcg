import { StyleSheet } from 'react-native'
import dims from '@constants/layout'

const {width, height} =dims

const GameBoardStyles = StyleSheet.create({
  gameBoardContainer:{
    backgroundColor:'gray',
    height:height*0.8,
    width:width*0.8,
  }
})

export default GameBoardStyles