import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {sMain} from '../utils/colors';

class NewCard extends Component{
  state ={
    question: '',
    answer:'',
  }
  static navigationOptions = ({navigation}) => ({title:'Add New Card' });
  submit = () =>{

  }

  render(){
    return(
    <View style={[styleLibrary.detailContainer,{padding:20}]}>
      <TextInput placeholder="Type a question" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({question:text})}/>
      <TextInput placeholder="Type an answer" style={styleLibrary.addDeckInput} onChangeText={(text) => this.setState({answer:text})}/>
      <View style={{alignItems:'center'}}>
        <TouchableNativeFeedback>
          <View style={[styleLibrary.detailButton,{backgroundColor:sMain,marginTop:100}]}>
            <Text style={styleLibrary.detailDeckButtonText}>Add Card</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
  }
}

mapDispatchToProps = dispatch => ({
  add : (data) => dispatch(addCard(data)),
})

export default connect(null,mapDispatchToProps)(NewCard);
