// package import
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  I18nManager,
  TextInputProps,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

// utils import
import {moderateScale} from '../utils/ResponsiveDimentions';
import colors from '../utils/colors';
import {hp, wp} from '../utils/dimensions';
import Text from './Text';
import {AntDesign, FontAwesome} from './AppIcon';
import FontsSizes from '../utils/FontsSizes';
import fonts from '../utils/fonts';

export type CustomTextInputProps = TextInputProps &
  ViewProps & {
    viewStyle?: StyleProp<ViewStyle>;
    errors?: string | undefined | any;
    touched?: boolean | undefined | any | {[key: string]: any};
    inputError?: boolean;
    inputIconType?: string;
    inputIconName?: string;
    title: string;
    handleChange: (value: string) => any;
    handleBlur?: (e: any) => any;
    dropDownInput?: boolean;
    handleClick?: (value: boolean) => void;
    hideDropDownicon?: boolean;
    inputRightIconName?: string;
    inputRightIconType?: string;
    constinerStyle?: StyleProp<ViewStyle>;
    label?: string;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
  };
const Input = (props: CustomTextInputProps) => {
  const [inputType, setInputType] = useState(
    props.secureTextEntry ? true : false,
  );
  return (
    <View
      style={[
        {width: '100%', alignSelf: 'center', marginTop: moderateScale(0)},
        props.viewStyle,
      ]}>
      {props.label && (
        <Text bold style={[styles.inputTitle, props?.labelStyle]}>
          {props.label}
        </Text>
      )}
      <View
        style={[
          {
            marginBottom: 2,
            borderWidth: 1,
            borderColor:
              (props.errors && props.touched) || props.inputError
                ? colors?.PrimaryColor
                : colors?.HeadlineColor,
            borderRadius: moderateScale(2),
          },
          props?.constinerStyle,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(3),
            width: '100%',
          }}>
          {props.inputIconType && <></>}
          <TextInput
            {...props}
            allowFontScaling={false}
            style={[
              styles.input,
              props.style,
              {
                width:
                  props.secureTextEntry || props.inputRightIconType
                    ? '83%'
                    : '90%',
              },
            ]}
            placeholder={props.title}
            placeholderTextColor={colors.HeadlineColor}
            onChangeText={props.handleChange}
            onBlur={props.handleBlur}
            value={props.value}
            secureTextEntry={inputType}
          />

          {props.dropDownInput && (
            /// this absolute TouchableOpacity ....  if input is dropdown list to click on it to fire any callback action
            <TouchableOpacity
              onPress={() => props?.handleClick && props?.handleClick(true)}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}></TouchableOpacity>
          )}
          {props.dropDownInput && !props?.hideDropDownicon && (
            <AntDesign
              name="down"
              style={{
                fontSize: FontsSizes.font14,
                color: colors?.HeadlineColor,
              }}
            />
          )}

          {props.inputRightIconType && <></>}

          {props.secureTextEntry && (
            ///  eye icon to hide or show password text ..... if input is password type
            <TouchableOpacity
              onPress={() => setInputType(!inputType)}
              style={{
                width: wp(10),
                height: hp(6),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name={inputType ? 'eye-slash' : 'eye'}
                style={{fontSize: FontsSizes.font20}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {props?.errors !== null && (
        <Text
          allowFontScaling={false}
          style={[
            styles.errorMsg,
            {
              textAlign: 'right',
              paddingHorizontal: wp(2),
              marginBottom: moderateScale(2),
            },
          ]}>
          {props.touched && props.errors}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  errorMsg: {
    color: colors.PrimaryColor,
    fontSize: FontsSizes.font12,
  },
  inputCon: {},
  input: {
    minHeight: hp(5.5),
    fontSize: FontsSizes.font14,
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: fonts?.JosefinSans,
  },
  inputTitle: {
    color: colors?.HeadlineColor,
    fontSize: FontsSizes.font12,
    paddingVertical: moderateScale(2),
  },
});
