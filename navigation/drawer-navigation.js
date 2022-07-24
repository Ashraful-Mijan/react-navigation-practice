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
import {View, Button, ImageBackground, Image} from 'react-native';
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

// custom drawer content
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6', paddingTop: 0}}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-jonathan-petersson-1237119.jpg&fm=jpg',
          }}
          style={{padding: 20}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text preset="h3">John Due</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text style={{color: 'black'}}>Our custom text</Text>
      </View>
    </View>
  );
}

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
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
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
