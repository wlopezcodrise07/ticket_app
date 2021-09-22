import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import MainNavigator from './Navigations';

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

