import {AsyncStorage} from 'react-native';
import {isEmpty} from './helpers';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

/*
* @description Prepares the local storage with an empty object.
*/
const prepareEmptyDecks = () =>{
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}));
  return {};
}

/*
* @description Validates if there are decks in the database, if the database returned
*  decks, it will return the result of decks, if not, it will initialize the database
*  with an empty object.
* @param {object} results - The decks retrieved from the database.
*/
export const prepareDecks = results => {
  return isEmpty(results)
    ? prepareEmptyDecks()
    : JSON.parse(results);
}
