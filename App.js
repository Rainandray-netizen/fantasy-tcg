import React,{ useContext } from 'react';
import GamePlace from './Components/GamePlace/GamePlace'
import { View, Text } from 'react-native'
import Context, { defaultContext } from './contexts/reducer'
import { registerRootComponent } from 'expo'
import ignoreWarnings from 'react-native-ignore-warnings'

ignoreWarnings([
  'Attempted import error', //warnings from react nav5
  'componentWillReceiveProps has been renamed', //warnings from touchopacity in sdk36
]);
ignoreWarnings('error', [
  'Failed prop type: Invalid props.style key `z` supplied to', //warnings from react draggable incompatibility on web
])
export default function App() {
  
  
  // const context = useContext(Context)
  //todo pass context thru to player hand.js

  // return (
  //   <Context.Provider value={context}>
  //       <GamePlace defaultContext={defaultContext} context={context}/>
  //   </Context.Provider>
  // )
  return(
    // <Context.Provider value={defaultContext}>
    <GamePlace/>
    // </Context.Provider>
  )
}
registerRootComponent(App)
