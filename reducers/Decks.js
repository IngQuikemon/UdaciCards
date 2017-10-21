import {LOAD_DECKS,ADD_DECK, ADD_QUESTION} from '../actions/types';

/*
* @description contains the initial state value of the decks reducer.
*/
const decksInitialValue = {
  list : {},
}

/*
* @description Handles the decks reducer to display and manage the general deck
  list.
* @param {object} state - contains the data managed by the store related to posts.
* @param {object} action - contains the action information to execute the changes
* to the data that will be returned to the store.
*/
export default function decks(state= decksInitialValue, action){
  const {decks,deck,keyID,question} = action;
  switch(action.type){
    case LOAD_DECKS:
      return {
        list : Object.assign({},state.list,decks),
      };
    case ADD_DECK:
      return {
        list: Object.assign(
          {},
          state.list,
          {
            [keyID]:{
              ...state.list[keyID],
              ...deck
            }
          }
        ),
      }
    case ADD_QUESTION:
      return {
        list:{...state.list,
          [keyID]:{
            ...state.list[keyID],
            questions:[...state.list[keyID].questions,question]
          }
        }
      }
    default:
      return state;
  }
}
