import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenOptions} from '../TabNavigation/TabStacks';
import LoginSecurity from '../../screens/Profile/LoginSecurity';

const Stack = createNativeStackNavigator();

const ProfileStack = props => {
  return (
    <Stack.Navigator initialRouteName={'ProfileScreen'} screenOptions={{}}>
      <Stack.Screen
        options={{...screenOptions,}}
        name={'LoginSecurity'}
        component={LoginSecurity}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
