import React from 'react';
import { Text, View} from 'react-native';
import {styleLibrary} from '../utils/styles';

SingleTextDialog = (props) => {
  return(
    <View style={styleLibrary.listItem}>
      <Text style={styleLibrary.listItemTitle}>{props.text}</Text>
      <Text style={styleLibrary.listItemSubTitle}>{props.subText}</Text>
    </View>
  )
}


export default SingleTextDialog;
