/* eslint-disable prettier/prettier */
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../src/components/text/text';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, selectStatus} from '../store/productSlice';
const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const products = useSelector(state => state.products.products);
  console.log('products', products);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  });

  if (status === 'loading') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView>
      {products.map(product => (
        <View key={product.email}>
          <Text style={{color: 'black'}}>{product.email}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Home;
