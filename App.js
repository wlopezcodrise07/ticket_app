import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import {init} from './db';
import MainNavigator from './Navigations';

init()
  .then(()=>console.log('Database initialized'))
  .catch(err => {
    console.error('Database failed to connect')
    console.error(err.message)
  })

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

