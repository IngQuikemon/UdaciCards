import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

DeckListItem = (props) => {
  return(
    <View style={styleLibrary.listItem}>
      <Text style={styleLibrary.listItemTitle}>{props.title}</Text>
      <Text style={styleLibrary.listItemSubTitle}>{props.subTitle}</Text>
    </View>
  )
}
