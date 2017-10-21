import React, {Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import DeckListItem from './DeckListItem';
import {getDecks} from '../utils/api';
import {isEmpty,cleanTitleString,findQuizDoneToday,clearLocalNotification} from '../utils/helpers';
import {loadDecks} from '../actions/index';
import SingleTextDialog from './SingleTextDialog';

class DeckList extends Component{

  /*
  * @description loads the decks into the store, and verifies if there is already
  *  a quiz completed. In case there is, it will clear the notifications for the day.
  */
  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.props.load({decks:decks});
      const deckNames = Object.keys(decks);
      for(x = 0; x <deckNames.length ; x++){
        if(findQuizDoneToday(decks[deckNames[x]].lastCompleted)){
          clearLocalNotification();
          break;
        }
      }
    });
  }

  /*
  * @description In charge to define the logic of the list builder.
  * @param {object} item - The deck to be rendered in the list.
  */
  listBuilder = ({item}) => {
      const {decks} = this.props;
      const deckId= cleanTitleString(item.title);
      return (
        <DeckListItem
          deck={decks[deckId]}
          openDeck={() => this.props.navigation.navigate(
            'DeckDetail',
            {title:decks[deckId].title}
          )}/>
      );
  };

  render(){
    const {decks} = this.props;
    let decksForList = Object.keys(decks).map((item) => ({key:item,title:item}));
    return(
      <View style={styleLibrary.container}>
        {isEmpty(decks)
        ? <SingleTextDialog text="" subText="You haven't created any decks yet. Start creating new decks by using the tab 'New Deck'."/>
        : <FlatList
            data={decksForList}
            extraData={decks}
            renderItem={this.listBuilder}>
          </FlatList>
        }
      </View>);
  }
}

const mapStateToProps = ({decks}) => ({
  decks: decks.list,
})

const mapDispatchToProps = dispatch => ({
  load : data => dispatch(loadDecks(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(DeckList);
