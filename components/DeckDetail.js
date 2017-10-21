import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white} from '../utils/colors';
import {cleanTitleString,isValueEmpty,formattedDate} from '../utils/helpers';

class DeckDetail extends Component{

  /*
  * @description defines the title of the view.
  */
  static navigationOptions = ({navigation}) => ({title: navigation.state.params.title});

  render(){
    const {decks,deckId} = this.props;
    const deck = decks[deckId];
    return(
      <View style={styleLibrary.containerCenter}>
        <Text style={styleLibrary.deckTitle}>
          {deck.title}
        </Text>
        <Text style={styleLibrary.detailDeckSubTitle}>
          {`${deck.questions.length} cards`}
        </Text>
        <Text style={[styleLibrary.detailDeckSubTitle,{fontSize:20}]}>
          {`High Score:${isValueEmpty(deck.highScore) ? 0 : deck.highScore} / Last Score: ${isValueEmpty(deck.lastScore) ? 0 : deck.lastScore}`}
        </Text>
        <Text style={[styleLibrary.detailDeckSubTitle,{fontSize:20}]}>
          {`Last time completed: ${(deck.lastCompleted !== null && deck.lastCompleted !== undefined ) ?  formattedDate(deck.lastCompleted) : 'Never'}`}
        </Text>
        <ButtonHolder
          submit={() => this.props.navigation.navigate(
              'AddCard',
              {deckId:deckId}
            )}
          buttonColor={white}
          buttonMargin={50}
          buttonText={'Add Card'}
          />
        <ButtonHolder
            submit={() => this.props.navigation.navigate(
                'StartQuiz',
                {deckId:deckId}
              )}
            buttonColor={sMain}
            buttonMargin={20}
            buttonText={'Start Quiz'}
            />
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
