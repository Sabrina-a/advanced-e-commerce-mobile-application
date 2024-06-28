import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppTabBar from './AppTabBar';
import HomeStack from '../NavStack/HomeStack';

import {Image, View} from 'react-native';
import home from '../../assets/images/Home.png';
import profile from '../../assets/images/profile.png';
import cart from '../../assets/images/Cart.png';

import {moderateScale} from '../../utils/ResponsiveDimentions';
import colors from '../../utils/colors';
import ProfileStack from '../NavStack/ProfileStack';
import CustomHeader from './CustomHeader';
import ShoppingCart from '../../screens/ShoppingCart/ShoppingCart';
import Payment from '../../screens/Payment/Payment';

export const screenOptions = {
  header: props => (
    <CustomHeader
      props={props}
      scene={'scene'}
      title={'scene.route.name'}
      navigation={props.navigation}
    />
  ),
  headerTransparent: true,
  cardStyle: {flex: 1},
};
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={AppTabBar}
      initialRouteName={'Home'}
      screenOptions={{lazy: true}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{tabBarIcon: homeIcon, title: 'Home', headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: profileIcon,
          title: 'Profile',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{tabBarIcon: cartIcon, title: 'Cart', headerShown: true}}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{tabBarIcon: paymentIcon, title: 'Payment', headerShown: true}}
      />
    </Tab.Navigator>
  );
}

const homeIcon = ({isFocused}) => {
  return (
    <View>
      <Image
        source={home}
        style={{
          width: moderateScale(10),
          height: moderateScale(10),
          tintColor: isFocused ? colors.PrimaryColor : colors.textPrimaryColor,
        }}
      />
    </View>
  );
};

const profileIcon = ({isFocused}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={profile}
        style={{
          tintColor: isFocused ? colors.PrimaryColor : colors.textPrimaryColor,
          width: moderateScale(10),
          height: moderateScale(10),
        }}
      />
    </View>
  );
};

const cartIcon = ({isFocused}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={cart}
        style={{
          tintColor: isFocused ? colors.PrimaryColor : colors.textPrimaryColor,
          width: moderateScale(10),
          height: moderateScale(10),
        }}
      />
    </View>
  );
};

const paymentIcon = ({isFocused}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={cart}
        style={{
          tintColor: isFocused ? colors.PrimaryColor : colors.textPrimaryColor,
          width: moderateScale(10),
          height: moderateScale(10),
        }}
      />
    </View>
  );
};
