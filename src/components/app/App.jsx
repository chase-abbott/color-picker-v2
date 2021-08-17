/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../state/RecordProvider';
import { RECORD, UNDO, REDO } from '../../state/actions';

const useRecord = (init) => {
  const [before, setBefore] = useState([]);
  const [current, setCurrent] = useState(init);
  const [after, setAfter] = useState([]);

  const undo = () => {
    setAfter((after) => [current, ...after]);
    setCurrent(before[before.length - 1]);
    setBefore((before) => before.slice(0, -1));
  };

  const redo = () => {
    setBefore((before) => [...before, current]);
    setCurrent(after[0]);
    setAfter((after) => after.slice(1));
  };

  const record = (val) => {
    setBefore((before) => [...before, current]);
    setCurrent(val);
  };

  return {
    undo,
    record,
    redo,
    current,
  };
};

function App() {
  const dispatch = useDispatch();
  const selector = useSelector();
  const { current, undo, redo, record } = useRecord('#FF0000');


  return (
    <>
      <button onClick={() => dispatch({ type: UNDO })}>undo</button>
      <button onClick={redo}>redo</button>
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

