/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('Signup')} title="Sign UP" />
    </View>
  );
}
