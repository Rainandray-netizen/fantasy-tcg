import {StyleSheet} from 'react-native'

const cardCircleStyles = StyleSheet.create({
  grey:{backgroundColor:'grey'},
  blue:{backgroundColor:'blue'},
  red:{backgroundColor:'red'},
  circleContainer:{
    borderRadius:100,
    height:20,
    width:20,
    margin:5,
    marginLeft: 7
    // textAlign:center,
    // color:'red',
  },
  textColor:{
    textAlign:'center',
    color:'white',
  }
})

export default cardCircleStyles