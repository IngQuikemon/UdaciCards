import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableNativeFeedback, Animated} from 'react-native';
import {styleLibrary} from '../utils/styles';
import {addDeck} from '../actions/index';

class DeckListItem extends Component{

  componentWillMount(){
    this.bounceAnim = new Animated.Value(0);
  }

  submitDeck = () => {
    /*Animated.timing(
      this.bounceAnim,
      {
        toValue:1,
        duration:500,
      }
    ).start();
    */

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

  render(){
    const {openDeck,title,subTitle} = this.props;
    const bounceValue = this.bounceAnim.interpolate({
      inputRange: [0,1],
      outputRange: [25,35]
    });
    return(
      <TouchableNativeFeedback onPress={this.submitDeck}>
        <View style={styleLibrary.listItem}>
          <Animated.Text style={[styleLibrary.listItemTitle,{fontSize:bounceValue}]}>{title}</Animated.Text>
          <Text style={styleLibrary.listItemSubTitle}>{subTitle}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default DeckListItem;
