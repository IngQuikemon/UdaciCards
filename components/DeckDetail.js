import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white} from '../utils/colors';
import {cleanTitleString} from '../utils/helpers';

class DeckDetail extends Component{

  static navigationOptions = ({navigation}) => ({title: navigation.state.params.title});

  render(){
    const {decks,deckId} = this.props;
    return(
      <View style={styleLibrary.detailContainer}>
        <Text style={styleLibrary.detailDeckTitle}>
          {decks[deckId].title}
        </Text>
        <Text style={styleLibrary.detailDeckSubTitle}>
          {`${decks[deckId].questions.length} cards`}
        </Text>
        <View style={[styleLibrary.buttonContainer,{marginTop:150}]}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate(
                'AddCard',
                {deckId:deckId}
              )}>
            <View style={[styleLibrary.buttonRaised,{backgroundColor:white}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Add Card</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate(
                'StartQuiz',
                {deckId:deckId}
              )}>
            <View style={[styleLibrary.buttonRaised,{backgroundColor:sMain}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Start Quiz</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({decks},{navigation}) => {
  const {title} = navigation.state.params;
  return {
    decks: decks.list,
    deckId: cleanTitleString(title),
  }
}

export default connect(mapStateToProps)(DeckDetail);
