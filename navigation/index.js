/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/product-details';
import Headphones from '../screens/headphones';
import Earphones from '../screens/earphones';
import Speakers from '../screens/speakers';
import Cart from '../screens/cart';
import Checkout from '../screens/checkout';
import {colors} from '../src/theme/colors';

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();

function HeadphonesStackScreens() {
  return (
    <HeadphonesStack.Navigator>
      <HeadphonesStack.Screen name="Headphone" component={Headphones} />
      <HeadphonesStack.Screen name="Details" component={Details} />
    </HeadphonesStack.Navigator>
  );
}

const EarphoneStack = createNativeStackNavigator();

function EarphoneStackScreens() {
  return (
    <EarphoneStack.Navigator>
      <EarphoneStack.Screen name="Earphone" component={Earphones} />
      <EarphoneStack.Screen name="Details" component={Details} />
    </EarphoneStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();

function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreens() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.orange,
        }}>
        <Tab.Screen
          options={{title: 'Home'}}
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{title: 'Headphones'}}
          name="HeadphonesTab"
          component={HeadphonesStackScreens}
        />
        <Tab.Screen
          options={{title: 'Earphones'}}
          name="EarphonesTab"
          component={EarphoneStackScreens}
        />
        <Tab.Screen
          EarphonesTab
          name="SpeakersTab"
          component={SpeakersStackScreens}
        />
        <Tab.Screen
          options={{title: 'Cart'}}
          name="CartTab"
          component={CartStackScreens}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
