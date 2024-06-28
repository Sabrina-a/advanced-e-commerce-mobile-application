import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductList from '../Products/ProductList';
import {wp} from '../../utils/dimensions';
import {login} from '../../services/userServices';

const Home = () => {


  return (
    <View style={styles?.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Home;
