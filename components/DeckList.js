import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {styleLibrary} from '../utils/styles';

class DeckList extends Component{
  render(){
    return(
      <View style={styleLibrary.container}>
        <View style={styleLibrary.listItem}>
          <Text style={styleLibrary.listItemTitle}>Test Title</Text>
          <Text style={styleLibrary.listItemSubTitle}>X cards</Text>
        </View>
      </View>
    );
  }
}



export default DeckList;
