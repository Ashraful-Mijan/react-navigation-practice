/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import DrawerNavigation from './navigation/drawer-navigation';
import Flow from './navigation/flow';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      {/* <DrawerNavigation/> */}
      <Flow />
      <StatusBar />
    </Provider>
  );
};

export default App;
