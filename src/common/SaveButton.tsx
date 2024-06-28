import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacityProps} from 'react-native';
import {moderateScale} from '../utils/ResponsiveDimentions';
import {wp} from '../utils/dimensions';
import imgs from '../assets/imgs';
import TouchableOpacity from '../common/TouchableOpacity';
import usePostData from '../Api/usePostData';
import wishlistServices from '../services/wishlist-services';
import {
  showToastErrorMSG,
  showToastSuccessMessage,
} from '../utils/utilsFunctions';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../utils/colors';
import useDeleteData from '../Api/useDeleteData';
import {
  removeFromWishlistAsync,
  addToWishlistAsync,
} from '../redux/reducerSlices/Wishlist/wishlistSlice';
import useGetData from '../Api/useGetData';
import {t} from 'i18next';
import {RootState} from '../redux/store';
const SavedButton = (
  props: TouchableOpacityProps & {variationId?: string; color?: string},
) => {
  const customerId = useSelector<RootState>(
    state => state?.auth?.currentUser?._id,
  );
  const dispatch = useDispatch();
  const wishlist = useSelector<RootState>(state => state?.wishlist);

  const isVariationInWishlist = wishlist?.flat().includes(props?.variationId);

  const handleToggleWishlist = variationId => {
    if (isVariationInWishlist) {
      dispatch(removeFromWishlistAsync(variationId));
    } else {
      dispatch(addToWishlistAsync(variationId));
      // showToastSuccessMessage(t('Added to wishlist'));
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.savedButton, props.style]}
      onPress={() => handleToggleWishlist(props?.variationId)}
      // onPress={ addedToWishlist ? ()=>removeFromWishlist(customerId,props?.variationId)  : () => { addToWishlist(customerId,props?.variationId)}}
    >
      {/* {props?.trending ? ( */}
      <Image
        style={{height: moderateScale(9), width: moderateScale(10)}}
        source={isVariationInWishlist ? imgs?.redHeart : imgs.saveIcon}
        tintColor={
          isVariationInWishlist ? colors?.PrimaryColor : props?.color || 'black'
        }
      />
 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  savedButton: {
    backgroundColor: '#00000060',
    borderRadius: 50,
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedButton;
