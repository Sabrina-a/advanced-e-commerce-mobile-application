import React, {useTransition} from 'react';
import {StyleSheet} from 'react-native';
import Image from '../common/Image';
import View from '../common/View';
import Text from '../common/Text';
import {moderateScale} from '../utils/ResponsiveDimentions';
import star from "../assets/images/star.png";
type Props = {
  rate: number;
  reviewNumber: number;
  textColor?: string;
  imgColor?: string;
  disappear?: boolean;
};

const Review = ({
  rate,
  reviewNumber,
  textColor,
  imgColor,
  disappear,
}: Props) => {

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{height: moderateScale(10), borderRadius: moderateScale(50)}}
        source={star}
        tintColor={imgColor}
      />
      <Text color={textColor}>
        {rate || 0} {!disappear && `(${reviewNumber || 0} Review`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Review;
