import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {styleLibrary} from '../utils/styles';
import {cleanTitleString,upperTitleText} from '../utils/helpers';
import {saveDeck} from '../utils/api';
import {addDeck} from '../actions/index';
import {sMain} from '../utils/colors';
import ButtonHolder from './ButtonHolder';

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

    this.setState({newTitle:''},
      ()=>{
        console.log("Title" + this.state.newTitle);
        this.props.navigation.navigate(
            'DeckDetail',
            {title:deck.title}
        );
      });

  }
  render(){
    return(
      <View style={[styleLibrary.container,{justifyContent:'center'}]}>
        <View style={styleLibrary.addDeckContainer}>
          <Text style={styleLibrary.addDeckTitle}>What is the title of your new deck?</Text>
          <TextInput
            placeholder="Deck Title"
            style={styleLibrary.addDeckInput}
            onChangeText={(text) => this.setState({newTitle:text})}
            value={this.state.newTitle}/>
          <ButtonHolder
            submit={this.submit}
            buttonColor={sMain}
            buttonText={'Create Deck'}
            buttonMargin={100}/>
        </View>
      </View>
    );
  }
}

mapDispatchToProps = dispatch => ({
  add : (data) => dispatch(addDeck(data)),
})


export default connect(null,mapDispatchToProps)(NewDeck);
