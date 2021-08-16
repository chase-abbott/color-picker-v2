/* eslint-disable max-len */
import { UNDO, REDO, RECORD } from './actions.jsx';

const initialState = {
  before: [],
  current: '#FF0000',
  after: []
};

const reducer = (state, action) => {
  switch(action.type){
    case UNDO:
      return state;
    case REDO:
      return state;
    case RECORD:
      return { ...state, current: action.payload, before: [...action.payload] }; 
    default:
      return state;
  }
  
};

export { initialState, reducer };
