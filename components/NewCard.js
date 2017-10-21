import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {styleLibrary} from '../utils/styles';
import {sMain} from '../utils/colors';
import {saveDeck} from '../utils/api';
import {addCard} from '../actions/index';
import ButtonHolder from './ButtonHolder';

class NewCard extends Component{
  state ={
    question: '',
    answer:'',
  }
  /*
  * @description Sets the title of the View.
  */
  static navigationOptions = ({navigation}) => ({title:'Add New Card' });

  /*
  * @description Handles the logic for saving a new Question card in the deck.
  */
  submit = () =>{
    const {decks,deckId} = this.props;
    const question = {
      question:this.state.question,
      answer:this.state.answer
    }

    const deck = {
      questions:[
        ...decks[deckId].questions,
        question
      ],
    };

    const updatedDeck = {
      entry:deck,
      key:deckId
    };

    this.props.add({keyID:deckId,question:question});
    saveDeck(updatedDeck);

    this.props.navigation.goBack();
  }

  render(){
    return(
    <View style={[styleLibrary.containerCenter,{padding:20}]}>
      <TextInput placeholder="Type a question" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({question:text})}/>
      <TextInput placeholder="Type an answer" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({answer:text})}/>
      <ButtonHolder
        submit={this.submit}
        buttonColor={sMain}
        buttonText={'Add Card'}
        buttonMargin={100}
        />
    </View>
  );
  }
}

const mapStateToProps = ({decks},{navigation}) => {
  const {deckId} = navigation.state.params;
  return {
    decks: decks.list,
    deckId: deckId,
  }
}

const mapDispatchToProps = dispatch => ({
  add : (data) => dispatch(addCard(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(NewCard);
