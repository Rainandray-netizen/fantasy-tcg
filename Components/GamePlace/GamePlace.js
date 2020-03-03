import React, { useReducer, useContext, useEffect } from 'react'
import PlayerHand from '@components/PlayerHand/PlayerHand'
import GameBoard from '@components/GameBoard/GameBoard'
import {View,Text} from 'react-native'
import gamePlaceStyles from '@components/GamePlace/GamePlaceStyles'
import reducer, { initialState } from '../../contexts/reducer'
// import PlayerArea from '@components/PlayerArea/PlayerArea'
import PlayerCorner from '@components/PlayerCorner/PlayerCorner'
import LeftBar from '@components/LeftBar/LeftBar'

const GamePlace = ()=>{
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('state loads into game place: ',state)

  // const { contextCardsInHand = [] } = state
  //destructuring state object

  //draw cards in the beginning
  const dealStart = () => {
    // console.log('startToken found')
    if(state.startToken){
      dispatch({
        type:'DRAW_CARDS',
        payload:{
          shuffleFirst:true,
          draw: 5,
        },
      })
    }
  }
  //end draw cards

  useEffect(dealStart,[])

  return(
    //top of screen
    <View style={gamePlaceStyles.gamePlaceWrapper}>
      <Text>
        enemy here
      </Text>
    {/* //play area goes here */}
      <GameBoard boardState={state} boardDispatch={dispatch}/>
      {/* <PlayerArea areaState={state} areaDispatch={dispatch}/> */}
      <LeftBar leftBarState={state} leftBarDispatch={dispatch}/>
      <PlayerHand cardState={state} cardDispatch={dispatch}/>
    </View>
  )
}

export default GamePlace