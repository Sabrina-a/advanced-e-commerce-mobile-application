// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Home from '../screens/Home/Home';
import ProductDetails from '../screens/Products/ProductDetails';
import TabNavigation from './TabNavigation/TabStacks';

// import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const token = useSelector((state: any) => state?.auth?.token);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {token ? (
          <>
            <Stack.Screen
              options={{headerShown: false, title: ''}}
              name={'TabNavigation'}
              component={TabNavigation}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
