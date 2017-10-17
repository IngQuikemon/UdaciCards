import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white,green,red} from '../utils/colors';

class DeckQuiz extends Component{

  render(){
    return(
      <View style={styleLibrary.detailContainer}>
        <Text style={[styleLibrary.detailDeckSubTitle,{alignItems:'flex-start'}]}>X/Y</Text>
        <Text style={styleLibrary.detailDeckTitle}>Question Text</Text>
        <Text> Show Answer</Text>
        <View style={styleLibrary.buttonContainer}>
          <TouchableNativeFeedback>
            <View style={[styleLibrary.detailButton,{backgroundColor:green}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Correct</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            >
            <View style={[styleLibrary.detailButton,{backgroundColor:red}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Incorrect</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

export default DeckQuiz;
