import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableNativeFeedback, Animated} from 'react-native';
import {styleLibrary} from '../utils/styles';
import {addDeck} from '../actions/index';
import {formattedDate,isValueEmpty} from '../utils/helpers';

class DeckListItem extends Component{

  componentWillMount(){
    this.bounceAnim = new Animated.Value(0);
  }
  /*
  * @description Handles the logic for the deck selection.
  */
  submitDeck = () => {
    Animated.sequence([
      Animated.decay(
        this.bounceAnim,
        {
          toValue:1,
          velocity:.05,
          deceleration:0.92,
        }),
      Animated.spring(
        this.bounceAnim,
        {
          toValue:0,
          friction:9,
          tension:80,
        }
      )
    ]).start(
      () => this.props.openDeck()
    );
  }
  /*
  * @description Parses the subtitle string.
  * @param {int} cardCount - The number of questions the deck holds.
  */
  subTitleString = (cardCount) => {
    return `${cardCount} cards`;
  }


  render(){
    const {deck} = this.props;
    const bounceValue = this.bounceAnim.interpolate({
      inputRange: [0,1],
      outputRange: [25,35]
    });

    return(
      <TouchableNativeFeedback onPress={this.submitDeck}>
        <View style={styleLibrary.listItem}>
          <Animated.Text style={[styleLibrary.listItemTitle,{fontSize:bounceValue}]}>{deck.title}</Animated.Text>
          <Text style={styleLibrary.listItemSubTitle}>{this.subTitleString(deck.questions.length)}</Text>
          <Text style={[styleLibrary.listItemSubTitle,{fontSize:14}]}>
            {`High Score:${isValueEmpty(deck.highScore) ? 0 : deck.highScore} / Last Score: ${isValueEmpty(deck.lastScore) ? 0 : deck.lastScore}`}
          </Text>
          <Text style={[styleLibrary.listItemSubTitle,{fontSize:14}]}>
            {`Last time completed: ${(deck.lastCompleted !== null && deck.lastCompleted !== undefined ) ?  formattedDate(deck.lastCompleted) : 'Never'}`}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default DeckListItem;
