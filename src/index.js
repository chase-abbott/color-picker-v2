import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { RecordProvider } from './state/RecordProvider';

render(
  <RecordProvider>
    <App />
  </RecordProvider>,
  document.getElementById('root')
);
