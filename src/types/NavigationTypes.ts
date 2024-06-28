// src/types/NavigationTypes.ts

import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation stack param list
export type RootStackParamList = {
  Login?: undefined;
  Signup: undefined;
  ProductList: undefined; // Add more screens as needed
  Home: undefined;
  
};


export type NavigationType =StackNavigationProp<RootStackParamList>
// Add more types for other screens as needed
