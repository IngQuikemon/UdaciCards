import {AsyncStorage} from 'react-native';
import {prepareDecks} from './_decks';
import {DECKS_STORAGE_KEY} from './_decks.js';

/*
* @description Retrieves the decks from the local database.
*/
export function getDecks(){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then(prepareDecks);
}

/*
* @description Validates the if the path currently exist in the category list.
* @param {object} entry -The deck to be stored in the database.
* @param {string} key - the id of the deck to be saved to the database.
*/
export function saveDeck({entry,key}){
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [key]:entry,
  }));
}
