import {StyleSheet} from 'react-native'
import dims from '@constants/layout'

const {height, width} = dims
// console.log('DIM ', foo)

const PlayerHandStyles = StyleSheet.create({
  handContainer:{
    // color:'blue',
    // width: 200
    width: width*.8,
    height: height*.35,
    backgroundColor: 'green',
    position:'absolute',
    bottom:0,
    right:0
  },
  hideHand:{
    display:'none',
    width: width*0.8,
  }
})

export default PlayerHandStyles