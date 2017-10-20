import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableNativeFeedback,Animated,Easing} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white,green,red,sDark} from '../utils/colors';

class DeckQuiz extends Component{
  state ={
    page:0,
    total:0,
    questions:[],
    toggleCard:'q',
    score:0,
  }

  componentDidMount(){
    const {decks,title} = this.props;

    this.setState({
      questions: decks[title].questions,
      page:0,
      total:decks[title].questions.length,
    });
  }

  submit = result => {
    this.setState({
      score:(this.state.score + result),
      page: (this.state.page + 1),
      toggleCard: 'q',
    });
  }

  reset = () => {
    this.setState({
      score:0,
      page:0,
    })
  }

  flipCard = () => {
    const resultTest = this.state.toggleCard === 'q' ? 'a' : 'q';
    this.setState({
      toggleCard: resultTest
    });
  }

  static navigationOptions = ({navigation}) => ({title: 'Quiz'});

  render(){
    const {page,total,questions,toggleCard,score} = this.state;

    if((questions !== undefined && questions.length > 0)){
      if(((page + 1) <= questions.length)){
         return(
            <View style={[styleLibrary.container,{justifyContent:'space-between'}]}>
              <Text style={[styleLibrary.subTitleText,{alignItems:'flex-start'}]}>{page + 1}/{total}</Text>
              <Animated.View style={styleLibrary.containerCard}>
                <Text style={[styleLibrary.detailDeckTitle,{alignItems:'center'}]}>"{toggleCard === 'q' ? questions[page].question : questions[page].answer}"</Text>
                <View style={{alignItems:'flex-end'}}>
                  <TouchableNativeFeedback
                    onPress={this.flipCard}>
                    <View style={[styleLibrary.buttonFlat,{backgroundColor:white}]}>
                      <Text style={styleLibrary.buttonFlatText}>{toggleCard === 'q' ? 'Show Answer' : 'Show Question'}</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </Animated.View>
              <View style={[styleLibrary.buttonContainer,{marginBottom:150}]}>
                <TouchableNativeFeedback
                  onPress={() => this.submit(1)}>
                  <View style={[styleLibrary.buttonRaised,{backgroundColor:green}]}>
                    <Text style={styleLibrary.detailDeckButtonText}>Correct</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  onPress={() => this.submit(0)}>
                  <View style={[styleLibrary.buttonRaised,{backgroundColor:red}]}>
                    <Text style={styleLibrary.detailDeckButtonText}>Incorrect</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          )
      }else{
        return(
          <View style={[styleLibrary.container,{justifyContent:'center'}]}>
            <Text style={[styleLibrary.detailDeckTitle,{fontSize:25}]}>
              Great job. Your score this round is:
            </Text>
            <Text style={[styleLibrary.detailDeckTitle,{alignItems:'center'}]}>
              {score} correct out of {questions.length}
            </Text>
            <View style={[styleLibrary.buttonContainer,{marginBottom:150}]}>
              <TouchableNativeFeedback
                onPress={this.reset}>
                <View style={[styleLibrary.buttonRaised,{backgroundColor:white}]}>
                  <Text style={styleLibrary.detailDeckButtonText}>Try Again</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.goBack()}>
                <View style={[styleLibrary.buttonRaised,{backgroundColor:sMain}]}>
                  <Text style={styleLibrary.detailDeckButtonText}>Close Quiz</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        )
      }
    }else{
      return(
        <View style={[styleLibrary.container,{justifyContent:'center',alignItems:'center'}]}>
          <Text style={{alignItems:'center',fontSize:22,margin:20,marginBottom:40}}>There are no questions in this quiz yet. Try adding some questions first and try again.</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = ({decks},{navigation}) => {
  const {deckId} = navigation.state.params;
  return {
    decks: decks.list,
    title: deckId,
  }
}

export default connect(mapStateToProps)(DeckQuiz);
