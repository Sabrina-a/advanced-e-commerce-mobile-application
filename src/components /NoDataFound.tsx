import React from 'react';
import Text from '../common/Text';
import View from '../common/View';
import Button from '../common/Button';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils/ResponsiveDimentions';
import {hp, wp} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import { NavigationType } from '../types/NavigationTypes';

const NoDataFound = ({title}: {title: string}) => {
  const navigation = useNavigation<NavigationType>();
  return (
    <View >
      <View style={styles?.emptyCartContainer}>
        <Text size={18} primary bold center>
          No {title} yet
        </Text>

        <Text style={styles?.text}>
          When you add products to cart from different stores , you’ll find it
          here'
        </Text>
        <Button
          onPress={() => {
            navigation?.navigate('Home');
          }}
          style={styles?.exploreProducts}
          primary
          title="Explore Products"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({


  emptyCartContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    textAlign: 'center',
    width: wp(73),
  },

  exploreProducts: {
    // borderRadius: moderateScale(10),
    // // marginVertical: moderateScale(10),
    // height: hp(5),
    // width: wp(70),
    // // paddingHorizontal: moderateScale(25),

    // marginBottom: moderateScale(23),
    // alignSelf: 'center',
  },
  text: {
    paddingVertical: moderateScale(5),
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default NoDataFound;
