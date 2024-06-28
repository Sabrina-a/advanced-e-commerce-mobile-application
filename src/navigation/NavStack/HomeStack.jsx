import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';



import ProductList from '../../screens/Products/ProductList';
import Home from '../../screens/Home/Home';
import ProductDetails from '../../screens/Products/ProductDetails';

const Stack = createNativeStackNavigator();

const screenOption = {};
const HomeStack = props => {

  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{lazy: true}}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
  
     
    </Stack.Navigator>
  );
};



export default HomeStack;
