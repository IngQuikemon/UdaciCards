import React, {Component} from 'react';
import {View,Text, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import {black,sMain,white,green,red,sDark} from '../utils/colors';
import {clearLocalNotification,isEmpty} from '../utils/helpers';
import {addDeck} from '../actions/index';
import {saveDeck} from '../utils/api';
import ButtonHolder from './ButtonHolder';

class DeckQuiz extends Component{
  state ={
    page:0,
    total:0,
    questions:[],
    toggleCard:'q',
    score:0,
  }

  componentDidMount(){
    const {decks,deckId} = this.props;

    this.setState({
      questions: decks[deckId].questions,
      page:0,
      total:decks[deckId].questions.length,
    });
  }

  submit = result => {
    //Declare variables needed.
    const {decks,deckId} = this.props;
    const newPage = this.state.page + 1;
    const newScore = this.state.score + result;
    const deck = decks[deckId];
    //updates the state with the current values
    this.setState({
      score:newScore,
      page: newPage,
      toggleCard: 'q',
    });
    //Verifies if the quiz has reached its end.
    if(newPage + 1 > this.state.questions.length){
      clearLocalNotification();
      const newHighScore = isEmpty(deck.highScore) ? 0 : deck.highScore;
      const deckToUpdate = {
        highScore: newHighScore >= newScore ? deck.highScore : newScore ,
        lastScore: newScore,
        lastCompleted: Date.now(),
      }
      console.log({entry:deckToUpdate,key:deckId});
      this.props.update({deck:deckToUpdate,keyID:deckId});
      saveDeck({entry:deckToUpdate,key:deckId});
    }
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
              <View style={styleLibrary.containerCard}>
                <Text style={[styleLibrary.detailDeckTitle,{alignItems:'center'}]}>"{toggleCard === 'q' ? questions[page].question : questions[page].answer}"</Text>
                <View style={{alignItems:'flex-end'}}>
                  <TouchableNativeFeedback
                    onPress={this.flipCard}>
                    <View style={[styleLibrary.buttonFlat,{backgroundColor:white}]}>
                      <Text style={styleLibrary.buttonFlatText}>{toggleCard === 'q' ? 'Show Answer' : 'Show Question'}</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
              <View style={{marginBottom:100}}>
                <ButtonHolder
                  submit={() => this.submit(1)}
                  buttonColor={green}
                  buttonText={'Correct'}
                  buttonMargin={0}
                  />
                <ButtonHolder
                  submit={() => this.submit(0)}
                  buttonColor={red}
                  buttonText={'Incorrect'}
                  buttonMargin={20}
                  />
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
            <View style={{marginBottom:100}}>
              <ButtonHolder
                submit={this.reset}
                buttonColor={white}
                buttonText={'Try Again'}
                buttonMargin={0}
                />
              <ButtonHolder
                submit={() => this.props.navigation.goBack()}
                buttonColor={sMain}
                buttonText={'Close Quiz'}
                buttonMargin={20}
                />
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
    deckId: deckId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update : (data) => dispatch(addDeck(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckQuiz);
