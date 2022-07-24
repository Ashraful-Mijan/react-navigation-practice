/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

export default function SignUp({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SignUp page</Text>
      <Text onPress={() => navigation.navigate('Varify')}>Go Varify</Text>
    </View>
  );
}
