import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback,Alert} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {styleLibrary} from '../utils/styles';
import {cleanTitleString} from '../utils/helpers';
import {saveDeckTitle} from '../utils/api';
import {addDeck} from '../actions/index';

class NewDeck extends Component{
  state = {
    newTitle:''
  }
  submit = () => {
    const deck = {
      title:cleanTitleString(this.state.newTitle),
      questions:[],
    };

    const newDeck = {
      entry:deck,
      key:deck.title
    };

    this.props.add({deck:deck});
    saveDeckTitle(newDeck);

    this.props.navigation.dispatch(
      NavigationActions.back({key:'NewDeck'})
    );
  }
  render(){
    return(
      <View style={styleLibrary.container}>
        <View style={styleLibrary.addDeckContainer}>
          <Text style={styleLibrary.addDeckTitle}>What is the title of your new deck?</Text>
          <TextInput placeholder="Deck Title" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({newTitle:text})}/>
          <View style={{alignItems:'center'}}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              onPress={this.submit}>
              <View style={styleLibrary.addDeckButtonContainer} >
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
