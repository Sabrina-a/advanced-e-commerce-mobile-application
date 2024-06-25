// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/Register/SignUp';
// import { RootState } from '../store';
// import ProductList from '../screens/ProductList';
// import ProductDetails from '../screens/ProductDetails';
// import ShoppingCart from '../screens/ShoppingCart';

// import Signup from '../screens/Signup';
// import Payment from '../screens/Payment';


const Stack = createStackNavigator();

const MainNavigation = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserFromStorage());
  // }, [dispatch]);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ProductList">
      {/* //token ? */}
      {false ? (
        <>
          {/* <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="Payment" component={Payment} /> */}
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
