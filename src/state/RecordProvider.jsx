/* eslint-disable react/prop-types */
import React, { useReducer, useContext, createContext } from 'react';
import { reducer, initialState } from './reducer';

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RecordContext.Provider value={{ state, dispatch }}>
      {children}
    </RecordContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(RecordContext);
  return dispatch;
};

export const useSelector = () => {
  const { state } = useContext(RecordContext);
  return state;
};

