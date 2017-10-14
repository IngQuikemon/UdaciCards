import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {styleLibrary} from '../utils/styles';

class NewDeck extends Component{
  render(){
    return(
      <View style={styleLibrary.container}>
        <View style={styleLibrary.addDeckContainer}>
          <Text style={styleLibrary.addDeckTitle}>What is the title of your new deck?</Text>
          <TextInput placeholder="Deck Title" style={styleLibrary.addDeckInput}/>
          <View style={{alignItems:'flex-end'}}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styleLibrary.addDeckButtonContainer} >
                <Text style={styleLibrary.addDeckButtonText}>Create Deck</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default NewDeck;
