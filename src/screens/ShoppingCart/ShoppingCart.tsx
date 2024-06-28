import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  clearCart,
} from '../../redux/reducerSlices/cartSlice';
import {RootState} from '../../redux/store';
import ProductInCart from '../../components /ProductInCart';
import View from '../../common/View';
import CustomFlatList from '../../common/CustomFlatList';
import Button from '../../common/Button';
import NoDataFound from '../../components /NoDataFound';
import MainView from '../../common/MainView';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state?.cart?.items);
  const dispatch = useDispatch();



  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if(cartItems.length === 0) {
    return <MainView style={{alignItems:"center"}} >
      <NoDataFound title='Products' />
    </MainView>
  }

  return (
    <View style={styles.container}>
      <CustomFlatList
        data={cartItems}
        renderItem={({item}) => <ProductInCart product={item} />}
        keyExtractor={item => item.id.toString()}
      />
      {cartItems.length > 0 && (
        <Button primary title="Clear Cart" onPress={handleClearCart} />
      )}

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  quantityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default ShoppingCart;
