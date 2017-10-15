import * as Constants from './types';

export const loadDecks = ({decks}) =>({
  type:Constants.LOAD_DECKS,
  decks,
});

export const addDeck = ({deck}) => ({
  type:Constants.ADD_DECK,
  deck,
});

export const addQuestion = ({title,question}) =>({
  type:Constants.ADD_QUESTION,
  title,
  question,
});
