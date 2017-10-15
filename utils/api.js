import {AsyncStorage} from 'react-native';
import {prepareDecks} from './_decks';
import {DECKS_STORAGE_KEY} from './_decks.js';

export function getDecks(){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then(prepareDecks);
}

export function getDeck(){
  return null;
}

export function saveDeckTitle({entry,key}){
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [key]:entry,
  }));
}

export function addCardToDeck(){
  return null;
}
