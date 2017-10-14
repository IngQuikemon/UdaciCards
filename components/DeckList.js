import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {styleLibrary} from '../utils/styles';
import DeckListItem from './DeckListItem';

class DeckList extends Component{
  state = {
    entries:null
  };

  render(){
    const {entries} = this.state;

    return(
      <View style={styleLibrary.container}>
      { entries === null
        ? <DeckListItem title="" subTitle="You haven't created any decks yet. Start creating new decks by using the tab 'New Deck'."/>
        : <DeckListItem title="Test Title" subTitle="X cards"/>
      }
    </View>
    );
  }
}



export default DeckList;
