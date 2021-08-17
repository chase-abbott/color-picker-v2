/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from '../../state/RecordProvider';
import { RECORD, UNDO, REDO } from '../../state/actions';


function App() {
  const dispatch = useDispatch();
  const selector = useSelector();

  return (
    <>
      <button onClick={() => dispatch({ type: UNDO })}>undo</button>
      <button onClick={() => dispatch({ type: REDO })}>redo</button>
      <input
        type="color"
        value={selector.current}
        onChange={({ target }) => dispatch({ type: RECORD, payload: target.value })}
        data-testid="input"
      />
      <div
        data-testid="display"
        style={{ backgroundColor: selector.current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;

