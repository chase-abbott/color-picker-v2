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
      return { 
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1),
      };
    case REDO:
      return {
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
      };
    case RECORD:
      return { ...state, current: action.payload, before: [...state.before, state.current] }; 
    default:
      return state;
  }
  
};

export { initialState, reducer };
