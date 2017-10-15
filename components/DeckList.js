import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {styleLibrary} from '../utils/styles';
import DeckListItem from './DeckListItem';
import {getDecks} from '../utils/api';
import {isEmpty} from '../utils/helpers';

class DeckList extends Component{
  state = {
    decks:null
  };

  componentDidMount(){
    getDecks()
    .then((decks) => {
      console.log(Object.keys(decks));
      this.setState({decks});
    });
  }

  render(){
    const {decks} = this.state;

    return(
      <View style={styleLibrary.container}>
      { isEmpty(decks)
        ? <DeckListItem title="" subTitle="You haven't created any decks yet. Start creating new decks by using the tab 'New Deck'."/>
        : <View>
          { Object.keys(decks).map( title => (
            <DeckListItem key={title} title={decks[title].title} subTitle={`${decks[title].questions.length} cards`}/>
            ))
          }
          </View>
      }
    </View>
    );
  }
}



export default DeckList;
