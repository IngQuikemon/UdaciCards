import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styleLibrary} from '../utils/styles';
import {addDeck} from '../actions/index';

DeckListItem = (props) => {
  return(
    <View style={styleLibrary.listItem}>
      <Text style={styleLibrary.listItemTitle}>{props.title}</Text>
      <Text style={styleLibrary.listItemSubTitle}>{props.subTitle}</Text>
    </View>
  )
}


export default DeckListItem;
