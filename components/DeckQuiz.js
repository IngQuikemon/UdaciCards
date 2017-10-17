import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white,green,red,sDark} from '../utils/colors';

class DeckQuiz extends Component{
  static navigationOptions = ({navigation}) => ({title: 'Quiz'});
  render(){
    return(
      <View style={[styleLibrary.container,{justifyContent:'space-between'}]}>
        <Text style={[styleLibrary.subTitleText,{alignItems:'flex-start'}]}>X/Y</Text>
        <View style={styleLibrary.containerCard}>
          <Text style={[styleLibrary.detailDeckTitle,{alignItems:'center'}]}>Question Text</Text>
          <View style={{alignItems:'flex-end'}}>
            <TouchableNativeFeedback>
              <View style={[styleLibrary.buttonFlat,{backgroundColor:white}]}>
                <Text style={styleLibrary.buttonFlatText}>ANSWER</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={[styleLibrary.buttonContainer,{marginBottom:150}]}>
          <TouchableNativeFeedback>
            <View style={[styleLibrary.buttonRaised,{backgroundColor:green}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Correct</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            >
            <View style={[styleLibrary.buttonRaised,{backgroundColor:red}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Incorrect</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

export default DeckQuiz;
