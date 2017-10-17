import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {styleLibrary} from '../utils/styles';
import {sMain} from '../utils/colors';
import {saveDeck} from '../utils/api';
import {addCard} from '../actions/index';

class NewCard extends Component{
  state ={
    question: '',
    answer:'',
  }

  static navigationOptions = ({navigation}) => ({title:'Add New Card' });

  submit = () =>{
    const {decks,title} = this.props;
    const question = {
      question:this.state.question,
      answer:this.state.answer
    }

    const deck = {
      questions:[
        ...decks[title].questions,
        question
      ],
    };

    const updatedDeck = {
      entry:deck,
      key:title
    };

    this.props.add({title:title,question:question});
    saveDeck(updatedDeck);

    this.props.navigation.goBack();
  }

  render(){
    return(
    <View style={[styleLibrary.detailContainer,{padding:20}]}>
      <TextInput placeholder="Type a question" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({question:text})}/>
      <TextInput placeholder="Type an answer" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({answer:text})}/>
      <View style={styleLibrary.buttonContainer}>
        <TouchableNativeFeedback
          onPress={this.submit}>
          <View style={[styleLibrary.buttonRaised,{backgroundColor:sMain,marginTop:100}]}>
            <Text style={styleLibrary.detailDeckButtonText}>Add Card</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
  }
}

const mapStateToProps = ({decks},{navigation}) => {
  const {deckId} = navigation.state.params;
  return {
    decks: decks.list,
    title: deckId,
  }
}

const mapDispatchToProps = dispatch => ({
  add : (data) => dispatch(addCard(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(NewCard);
