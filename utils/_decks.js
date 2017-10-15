import {AsyncStorage} from 'react-native';
import {isEmpty} from './helpers';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

const prepareEmptyDecks = () =>{
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}));
  return {};
}

export const prepareDecks = results => {
  return isEmpty(results)
    ? prepareEmptyDecks()
    : JSON.parse(results);
}
