import React from 'react';
import {StyleSheet, Text as MainText, I18nManager, StyleProp, TextStyle} from 'react-native';
import colors from '../utils/colors';
import {TextProps} from 'react-native';
import FontsSizes from '../utils/FontsSizes';
import {moderateScale} from '../utils/ResponsiveDimentions';
import fonts from '../utils/fonts';

type Props = {
  bold?: boolean;
  regular?: boolean;
  white?: boolean;
  primary?: boolean;
  size?: number;
  color?: string;
  title?: boolean;
  center?: boolean;
  justify?: boolean;
  subheadColor?: boolean;
  subTitle?: boolean;
  style?:StyleProp<TextStyle>|any
};

const Text = (props: TextProps & Props) => {
  const {
    subheadColor,
    subTitle,
    bold,
    regular,
    white,
    primary,
    style,
    size,
    color,
    title,
    center,
    justify,
  } = props;
  const lineHeight = style?.fontSize
    ? style?.fontSize * 1.4
    : size
    ? size * 1.4
    : FontsSizes?.font14 * 1.4;
  return (
    <MainText
      {...props}
      style={[
        {
          color: color ? color : '#000',
          textAlign: 'justify',
          fontFamily: fonts?.JosefinSans,
        },
        {textAlign: 'left'},
        bold && styles?.bold,
        regular && styles.regular,
        white && styles?.white,
        primary && styles?.primary,
        (subheadColor || subTitle) && styles?.SubheadColor,
        title && styles?.title,
        center && {textAlign: 'center'},
        !!size && {fontSize: size},
        style,
        {lineHeight: title ?  FontsSizes?.font14 * 1.4: lineHeight }
      ]}>
      {props?.children}
    </MainText>
  );
};

const styles = StyleSheet?.create({
  bold: {
    fontFamily: fonts?.JosefinSansBold,
  },
  regular: {
    fontFamily: fonts?.JosefinSansBold,
  },
  white: {
    color: colors?.white,
  },
  primary: {
    color: colors?.PrimaryColor,
  },
  SubheadColor: {
    color: colors?.SubheadColor,
  },
  title: {
    fontSize: FontsSizes?.font14,
    paddingTop: moderateScale(1),
    fontFamily: fonts?.JosefinSansBold,
    // lineHeight: FontsSizes?.font14 * 1.4,
  },
  
});

export default Text;
