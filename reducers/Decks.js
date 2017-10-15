import {LOAD_DECKS,ADD_DECK} from '../actions/types';

const decksInitialValue = {
  list : {},
}

export default function decks(state= decksInitialValue, action){
  const {decks,deck} = action;
  switch(action.type){
    case LOAD_DECKS:
      return {
        list : Object.assign({},state.list,decks),
      };
    case ADD_DECK:
      return {
        list: Object.assign({},state.list,{[deck.title]:deck}),
      }
    default:
      return state;
  }
}
