import React from 'react';
import {createRoot} from 'react-dom/client';
import AppContainer from './containers/AppContainer';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer/>
  </React.StrictMode>
);

