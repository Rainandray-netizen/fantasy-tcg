import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import HandToggleStyles from './HandToggleStyles'

const HandToggle = (props) => {

  const { handToggleState, handToggleDispatch} = props

  const flipToggle = () => {
    handToggleDispatch({
      type: 'TOGGLE_HAND',
      payload: {}
    })
  }

  return(
    <TouchableOpacity
    style={HandToggleStyles.toggleWrapper}
    onPress={flipToggle}
    >
      <Text style={HandToggleStyles.toggleText}>
        Cards
      </Text>
    </TouchableOpacity>
  )
}

export default HandToggle