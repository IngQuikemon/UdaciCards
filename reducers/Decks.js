import {LOAD_DECKS,ADD_DECK, ADD_QUESTION} from '../actions/types';

const decksInitialValue = {
  list : {},
}

export default function decks(state= decksInitialValue, action){
  const {decks,deck,keyID,question} = action;
  switch(action.type){
    case LOAD_DECKS:
      return {
        list : Object.assign({},state.list,decks),
      };
    case ADD_DECK:
      return {
        list: Object.assign({},state.list,{[keyID]:deck}),
      }
    case ADD_QUESTION:
      return {
        list:{...state.list,
          [keyID]:{
            questions:[...state.list[keyID].questions,question]
          }
        }
      }
    default:
      return state;
  }
}
