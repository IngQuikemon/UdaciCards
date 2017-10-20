import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {styleLibrary} from '../utils/styles';
import {cleanTitleString,upperTitleText} from '../utils/helpers';
import {saveDeck} from '../utils/api';
import {addDeck} from '../actions/index';
import {sMain} from '../utils/colors';

class NewDeck extends Component{
  state = {
    newTitle:''
  }
  submit = () => {
    const deck = {
      title:upperTitleText(this.state.newTitle),
      highScore:0,
      lastScore:0,
      lastCompleted:null,
      questions:[],
    };
    console.log(deck);

    const deckId = cleanTitleString(deck.title);

    const newDeck = {
      entry:deck,
      key:deckId
    };

    this.props.add({deck:deck,keyID:deckId});
    saveDeck(newDeck);

    this.setState({newTitle:''});

    this.props.navigation.navigate(
        'DeckDetail',
        {deckId:deckId}
    );
  }
  render(){
    return(
      <View style={styleLibrary.container}>
        <View style={styleLibrary.addDeckContainer}>
          <Text style={styleLibrary.addDeckTitle}>What is the title of your new deck?</Text>
          <TextInput placeholder="Deck Title" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({newTitle:text})}/>
          <View style={[styleLibrary.buttonContainer,{marginTop:150}]}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              onPress={this.submit}>
              <View style={[styleLibrary.buttonRaised,{backgroundColor:sMain}]} >
                <Text style={styleLibrary.addDeckButtonText} >Create Deck</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

mapDispatchToProps = dispatch => ({
  add : (data) => dispatch(addDeck(data)),
})


export default connect(null,mapDispatchToProps)(NewDeck);
