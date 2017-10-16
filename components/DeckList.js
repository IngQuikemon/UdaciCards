import React, {Component} from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {styleLibrary} from '../utils/styles';
import DeckListItem from './DeckListItem';
import {getDecks} from '../utils/api';
import {isEmpty} from '../utils/helpers';
import {loadDecks} from '../actions/index';

class DeckList extends Component{

  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.props.load({decks:decks});
    });
  }

  listBuilder = ({item}) => {
      const {decks} = this.props;
      return (
        <DeckListItem title={item.title} openDeck={() => this.props.navigation.navigate(
            'DeckDetail',
            {deckId:item.title}
          )} subTitle={`${this.props.decks[item.title].questions.length} cards`}/>
      );
  };

  render(){
    const {decks} = this.props;
    let decksForList = Object.keys(decks).map((item) => ({key:item,title:item}));
    return(
      <View style={styleLibrary.container}>
        {isEmpty(decks)
        ? <DeckListItem title="" subTitle="You haven't created any decks yet. Start creating new decks by using the tab 'New Deck'."/>
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
