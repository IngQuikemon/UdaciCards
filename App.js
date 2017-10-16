import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {Constants} from 'expo';
import { pDark,white,pLight,sMain,pMain } from './utils/colors';
import reducer from './reducers';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckDetail from './components/DeckDetail';
import NewCard from './components/NewCard';

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
    activeTintColor: white,
    inactiveTintColor: white,
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
  DeckDetail:{
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor:white,
      headerStyle:{
        backgroundColor:pMain,
      }
    }
  },
  AddCard: {
    screen: NewCard,
    navigationOptions:{
      headerTintColor:white,
      headerStyle:{
        backgroundColor:pMain,
      }
    }
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)} >
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor={pDark} barStyle='light-content'  />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
