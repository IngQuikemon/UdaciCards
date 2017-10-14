import {AsyncStorage} from 'react-native';
import {CALENDAR_STORAGE_KEY} from './_decks.js';

export function getDecks(){
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
  .then((results) => JSON.parse(results));
}

export function getDeck(){
  return null;
}

export function saveDeckTitle(){
  return null;
}

export function addCardToDeck(){
  return null;
}
