/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import App from '../screens/App';
import SignUp from '../screens/SignUp';
import Varify from '../screens/Varify';
import Home from '../screens/home';

const AuthStack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={Login} />
      <AuthStack.Screen name="Signup" component={SignUp} />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Varify"
        component={Varify}
      />
    </AuthStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const AppScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={App} />
      <Drawer.Screen name="Main" component={Home} />
    </Drawer.Navigator>
  );
};

export default function Flow() {
  const isLogin = true;
  return (
    <NavigationContainer>
      {isLogin ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
}
