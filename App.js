import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';
import TicketNavigator from './Navigations/TicketNavigator';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
        <TicketNavigator/>
    </Provider>
  );
}

