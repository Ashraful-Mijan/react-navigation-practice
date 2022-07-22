/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Button} from 'react-native';
import Text from '../src/components/text/text';

// components
const Main = () => {
  return (
    <View>
      <Text>Hello Main page drawer</Text>
    </View>
  );
};
const About = () => {
  return (
    <View>
      <Text>Hello About page drawer</Text>
    </View>
  );
};

const HomePageStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <HomePageStack.Navigator screenOptions={{headerShown: false}}>
      <HomePageStack.Screen name="main" component={Main} />
    </HomePageStack.Navigator>
  );
}
const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator screenOptions={{headerShown: false}}>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'orange'},
          drawerStyle: {backgroundColor: '#c6cbef'},
          swipeEnabled: false,
          header: ({navigation, route, options, layout}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  backgroundColor: 'orange',
                }}>
                <Button
                  title="Drawer"
                  onPress={() => navigation.openDrawer()}
                />
                <Text>welcome</Text>
                <Text>header</Text>
              </View>
            );
          },
        }}>
        <Drawer.Screen
          options={{title: 'Home'}}
          name="mainTab"
          component={MainStackScreen}
        />
        <Drawer.Screen
          options={{title: 'About'}}
          name="aboutTab"
          component={AboutStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
