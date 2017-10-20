import * as Constants from './types';

export const loadDecks = ({decks}) =>({
  type:Constants.LOAD_DECKS,
  decks,
});

export const addDeck = ({deck,keyID}) => ({
  type:Constants.ADD_DECK,
  deck,
  keyID,
});

export const addCard = ({keyID,question}) =>({
  type:Constants.ADD_QUESTION,
  keyID,
  question,
});
