import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {Constants} from 'expo'
import { pDark,pText,pLight,sMain } from './utils/colors';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';

function UdaciStatusBar ({backgroundColor,...props}){
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions:{
      tabBarLabel: 'Decks'
    }
  },
  NewDeck:{
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel: 'New Deck'
    }
  }
},
{
  navigationOptions:{
    header: null
  },
  tabBarOptions:{
    activeTintColor: pText,
    inactiveTintColor: pText,
    style:{
      height:56,
      backgroundColor:pLight,
    },
    indicatorStyle:{
      backgroundColor:sMain,
      height:4
    }
  }
});

const MainNavigator = StackNavigator({
  Home:{
    screen: Tabs,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <UdaciStatusBar backgroundColor={pDark} barStyle='light-content'  />
        <MainNavigator />
      </View>
    );
  }
}
