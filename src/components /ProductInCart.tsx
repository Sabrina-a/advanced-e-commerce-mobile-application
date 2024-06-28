import React from 'react';
import View from '../common/View';
import Text from '../common/Text';
import pin from '../assets/images/pin.png';
import minusIcon from '../assets/images/minusIcon.png';
import plusIcon from '../assets/images/plusIcon.png';

import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils/ResponsiveDimentions';
import colors from '../utils/colors';
import FontsSizes from '../utils/FontsSizes';
import {hp, wp} from '../utils/dimensions';
import Button from '../common/Button';

import TouchableOpacity from '../common/TouchableOpacity';
import Image from '../common/Image';
import {Product} from '../types/types';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/reducerSlices/cartSlice';
import {useDispatch} from 'react-redux';

type ProductInCartProps = {
  product: Product;
};

const ProductInCart: React.FC<ProductInCartProps> = ({product}) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <View style={styles?.mainContainer}>
      <View
        style={{
          borderWidth: wp(0.1),
          borderRadius: moderateScale(5),
          paddingBottom: moderateScale(6),
        }}>
        <View
          style={{
            height: 120,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: moderateScale(5),
          }}>
          <Image
            resizeMode="cover"
            style={{
              flex: 1,
              overflow: 'hidden',

              borderTopLeftRadius: moderateScale(5),
              borderTopRightRadius: moderateScale(5),
              backgroundColor: colors?.tabBarBgColor,
            }}
            source={{uri: product?.image?.toString()}}
          />

          <TouchableOpacity
            onPress={()=> handleRemoveFromCart(product?.id)}
            style={{
              width: wp(8),
              position: 'absolute',
              zIndex: 11,
              top: 6,
              left: 8,
              // width: wp(8),
              height: wp(8),
              backgroundColor: 'rgba(0, 0, 0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(50),
            }}>
            <Image
              source={pin}
              style={{width: wp(4), height: wp(5)}}
              tintColor={colors?.PrimaryColor}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: moderateScale(5),
          }}>
          <View style={styles.productDescInCart}>
            <View style={styles?.textSection}>
              <View style={styles?.productName}>
                <Text numberOfLines={1} size={FontsSizes?.font16}>
                  {product?.productName}
                </Text>
                <Text
                  numberOfLines={1}
                  color={colors?.HeadlineColor}
                  size={FontsSizes?.font12}>
                  {product?.description}
                </Text>
              </View>
            </View>

            <View style={styles?.changeProductNum}>
              <Button
                style={[
                  {
                    width: hp(3),
                    height: hp(3),
                    borderRadius: moderateScale(50),
                  },
                  styles?.minusBtn,
                ]}
                icon={
                  <Image
                    source={minusIcon}
                    resizeMode="contain"
                    style={{display: 'flex', alignSelf: 'center'}}
                  />
                }
                bg_color={colors.PrimaryColor}
                onPress={() => handleDecreaseQuantity(product?.id)}
              />

              <Text size={FontsSizes?.font16}>{product?.quantity}</Text>

              <Button
                style={[
                  {
                    width: hp(3),
                    height: hp(3),
                    borderRadius: moderateScale(50),
                  },
                  styles?.plusBtn,
                ]}
                icon={
                  <Image
                    source={plusIcon}
                    resizeMode="contain"
                    style={{display: 'flex', alignSelf: 'center'}}
                  />
                }
                bg_color={colors.PrimaryColor}
                onPress={() => handleIncreaseQuantity(product?.id)}
              />
            </View>
          </View>

          {/* /////// */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(8),
            }}>
            <Text numberOfLines={1} color={colors?.PrimaryColor}>
              Total Price: {product?.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: moderateScale(10),
  },
  productDescInCart: {
    paddingTop: moderateScale(3),
    paddingRight: moderateScale(16),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  changeProductNum: {
    width: moderateScale(18),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    flex: 2,
    // height: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  productName: {
    flex: 0.6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  minusBtn: {
    backgroundColor: 'transparent',
    borderWidth: wp(0.3),
    padding: moderateScale(5),
    borderRadius: moderateScale(60),
  },
  plusBtn: {
    backgroundColor: colors?.PrimaryColor,
    borderWidth: wp(0.3),
    padding: moderateScale(5),
    borderRadius: moderateScale(60),
  },
});

export default ProductInCart;
