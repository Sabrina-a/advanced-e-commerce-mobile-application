import React, {useState} from 'react';
import {ImageBackground, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import View from '../common/View';
import {moderateScale} from '../utils/ResponsiveDimentions';
import {hp, wp} from '../utils/dimensions';

import SavedButton from '../common/SaveButton';
import Text from '../common/Text';

import Review from './Review';

import TouchableOpacity from '../common/TouchableOpacity';
import {useNavigation} from '@react-navigation/native';
import Image from '../common/Image';
import colors from '../utils/colors';

import {useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {  Product} from '../types/types';
import Button from '../common/Button';
import {addToCart} from '../redux/reducerSlices/cartSlice';
import { NavigationType, RootStackParamList } from '../types/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const [showImageModal, setShowImagModal] = useState(false);
  const navigation = useNavigation<NavigationType>()
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    
   
  };
  return (
    <>
      <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {product})
      }
      >
        <View style={[styles.container]}>
          <View
            style={{
              width: wp(90),
              height: 120,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: moderateScale(5),
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.29)',

                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                bottom: 0,
                zIndex: 3,
                overflow: 'hidden',
                borderTopLeftRadius: moderateScale(5),
                borderTopRightRadius: moderateScale(5),
              }}
            />
            <Image
              resizeMode="cover"
              style={{
                flex: 1,
                // overflow: 'hidden',
                borderTopLeftRadius: moderateScale(5),
                borderTopRightRadius: moderateScale(5),
                backgroundColor: colors?.tabBarBgColor,
              }}
              source={{uri: product?.image?.toString()}}
            />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                left: 1,
                top: 4,
                zIndex: 4,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

                position: 'absolute',
                bottom: 6,
                left: 8,
                zIndex: 24,
              }}>
              <View>
                {/* <Review
                  textColor={'#fff'}
                  rate={rating}
                  reviewNumber={reviewCount}
                /> */}
              </View>
            </View>
          </View>

          <View style={{padding: moderateScale(3)}}>
            <Text numberOfLines={1} title>
              {product?.productName}
            </Text>
            <Text numberOfLines={1} title>
              {product?.description}
            </Text>
            {/* <Text numberOfLines={1} subheadColor>
              {product?.owner}
            </Text> */}
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: moderateScale(3),
              height: hp(3),
              margin: 0,
            }}>
            <Text bold primary>
              {product?.price}
            </Text>
          </View>
          <Button
            style={{height: hp(5)}}
            primary
            title="Add To Cart"
            onPress={handleAddToCart}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: wp(70),
    borderWidth: wp(0.1),
    marginHorizontal: moderateScale(3),
    borderRadius: moderateScale(6),

    marginRight: moderateScale(5),
    marginBottom: moderateScale(4),

    paddingBottom: moderateScale(3),
  },

  headerBG: {
    height: hp(17.5),
  },
  savedButton: {
    backgroundColor: '#00000060',
    borderRadius: 50,
    width: wp(9),
    height: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
