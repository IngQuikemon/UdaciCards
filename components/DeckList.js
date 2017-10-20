import React, {Component} from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import DeckListItem from './DeckListItem';
import {getDecks} from '../utils/api';
import {isEmpty,cleanTitleString} from '../utils/helpers';
import {loadDecks} from '../actions/index';
import SingleTextDialog from './SingleTextDialog';

class DeckList extends Component{

  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.props.load({decks:decks});
    });
  }

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
    console.log(decks);
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
