import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';

import {hp, wp} from '../../utils/dimensions.js';
import colors from '../../utils/colors.js';
import {moderateScale} from '../../utils/ResponsiveDimentions.js';
import Text from '../../common/Text';
// import FontsSizes from '../../utils/FontsSizes.js';

const TabButton = ({
  style,
  tabBarIcon,
  onPress,
  isFocused,
  options,
  onLongPress,
  label,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        style || {
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:2,
         
        },
      ]}>
      {tabBarIcon}
      {label && (
        <Text
          style={{
            color: isFocused ? colors.PrimaryColor : colors.textPrimaryColor,
          }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default function AppTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        width: '100%',
        //  height: hp(10),
        backgroundColor: colors.BackgroundColor,
      }}>
 
        <View
          style={{
            flexDirection: 'row',
            paddingTop: '3%',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };


            return (
              <TabButton
                onPress={onPress}
                isFocused={isFocused}
                options={options}
                onLongPress={onLongPress}
                label={label}
                tabBarIcon={options?.tabBarIcon({isFocused})}
              />
            );
          })}
        </View>
     
    </View>
  );
}


