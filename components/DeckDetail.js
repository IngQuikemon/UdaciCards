import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white} from '../utils/colors';

class DeckDetail extends Component{

  static navigationOptions = ({navigation}) => ({title: navigation.state.params.deckId});

  render(){
    const {decks,title} = this.props;
    return(
      <View style={styleLibrary.detailContainer}>
        <Text style={styleLibrary.detailDeckTitle}>
          {title}
        </Text>
        <Text style={styleLibrary.detailDeckSubTitle}>
          {`${decks[title].questions.length} cards`}
        </Text>
        <View style={{alignItems:'center',justifyContent:'flex-end',marginTop:150}}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate(
                'AddCard',
                {deckId:title}
              )}>
            <View style={[styleLibrary.detailButton,{backgroundColor:white}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Add Card</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            >
            <View style={[styleLibrary.detailButton,{backgroundColor:sMain}]}>
              <Text style={styleLibrary.detailDeckButtonText}>Start Quiz</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({decks},{navigation}) => {
  const {deckId} = navigation.state.params;
  return {
    decks: decks.list,
    title: deckId,
  }
}

export default connect(mapStateToProps)(DeckDetail);
