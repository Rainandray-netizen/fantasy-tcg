import {StyleSheet} from 'react-native'

const CardTopStyles = StyleSheet.create({
  cardTopWrapper: {
    borderBottomWidth: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems: 'center'
  },
  cardName: {
    fontSize: 13,
    margin:5,
    marginLeft:7,
  },
})

export default CardTopStyles