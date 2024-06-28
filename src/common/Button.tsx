import React from 'react';
import {
  PressableProps,
  StyleSheet,
  ViewProps,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import colors from '../utils/colors';
import {moderateScale} from '../utils/ResponsiveDimentions';
import View from './View';
import Text from './Text';
import FontsSizes from '../utils/FontsSizes';
import {hp, wp} from '../utils/dimensions';

const Button = (
  props: TouchableOpacityProps &
    ViewProps & {
      cancle?: boolean;
      bg_color?: string;
      title?: string;
      primary?: boolean | undefined;
      containerStyle?: ViewStyle;
      icon?: JSX.Element;
      txtStyle?: object;
      fontSize?: number | undefined;
      disabled?: boolean;
      loading?: boolean;
    },
) => {
  const {
    bg_color,
    cancle,
    title,
    primary,
    style,
    containerStyle,
    icon,
    txtStyle,
    fontSize,
    loading,
    disabled,
  } = props;

  return (
    <View
      style={[
        {
          padding: moderateScale(4),
          width: '100%',
          // alignItems:  'center',
        },
        containerStyle,
      ]}>
      <TouchableOpacity
        disabled={disabled}
        {...props}
        onPress={props?.onPress}
        style={[
          styles?.button,
          primary && {backgroundColor: colors?.PrimaryColor},
          !!bg_color && {backgroundColor: bg_color, borderColor: bg_color},
          {height: hp(5)},
          style,

          disabled && {backgroundColor: 'rgba(136, 22, 25, .5)'},
         
        ]}>
        {!loading ? (
          <>
            {icon && icon}
            {title && (
              <Text
                size={fontSize ? fontSize : FontsSizes?.font18}
                bold
                primary={!primary && !cancle}
                white={primary || cancle}
                style={[
                  {
                    fontSize: FontsSizes?.font16,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                  txtStyle,
                ]}>
                {title && title}
              </Text>
            )}
          </>
        ) : (
          <ActivityIndicator color={colors.white} size="small" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  button: {
    backgroundColor: colors?.white,
    height: hp(7),
    width: '100%',
    borderRadius: moderateScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Button;
