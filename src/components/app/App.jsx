/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from '../../state/RecordProvider';
import { undoAction, redoAction, recordAction } from '../../state/actions';


function App() {
  const dispatch = useDispatch();
  const selector = useSelector();

  const undo = () => (
    dispatch(undoAction())
  );

  const redo = () => (
    dispatch(redoAction())
  );

  const record = value => (
    dispatch(recordAction(value))
  );

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        type="color"
        value={selector.current}
        onChange={({ target }) => record(target.value)}
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

