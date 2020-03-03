import { StyleSheet } from 'react-native'
import dims from '@constants/layout'

const {height, width} = dims

const PlayerCornerStyles = StyleSheet.create({
  cornerContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height*.35,
    width: width*.2,
    backgroundColor:'sienna',
    // position: 'absolute',
    // bottom:0,
    // left:0
  }
})

export default PlayerCornerStyles