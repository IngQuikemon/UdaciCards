import React from 'react';
import { Text, View,TouchableNativeFeedback} from 'react-native';
import {styleLibrary} from '../utils/styles';

ButtonHolder = (props) => {
  return(
    <View style={styleLibrary.buttonContainer}>
      <TouchableNativeFeedback
        onPress={props.submit}>
        <View style={[styleLibrary.buttonRaised,{backgroundColor:props.buttonColor,marginTop:props.buttonMargin}]}>
          <Text style={styleLibrary.detailDeckButtonText}>{props.buttonText}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}


export default ButtonHolder;
