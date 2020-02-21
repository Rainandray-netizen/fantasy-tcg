import {StyleSheet, Dimensions} from 'react-native'
import foo from '@constants/layout'
//todo:finish this
const {width,height} = foo

const CardStyles = StyleSheet.create({
  cardBody:{
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:15,
    width: width*.2,
    height: height*.35,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'white',
  
  }
})

export default CardStyles