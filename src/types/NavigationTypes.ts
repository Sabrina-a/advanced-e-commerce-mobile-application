 

import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from './types';
 
export type RootStackParamList = {
  Login?: undefined;
  Signup: undefined;
  ProductList:undefined; 
  Home: undefined;
  ProductDetails:{product:Product};
  TabNavigation?:undefined,
  
};

export type NavigationType =StackNavigationProp<RootStackParamList>
 
