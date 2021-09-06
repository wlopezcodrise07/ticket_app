import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';
import TicketNavigator from './Navigations/TicketNavigator';

export default function App() {

  return (
    <View style={styles.screen}>
      <TicketNavigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal:30,
    backgroundColor: '#F0F0F0',
    flex: 1,
    borderColor: '#0A1F49',
    borderWidth: 3,
    borderRadius: 5,
  }
});