import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {listProducts} from '../../services/apis';
import CustomFlatList from '../../common/CustomFlatList';
import ProductCard from '../../components /ProductCard';

const ProductList = () => {
 

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadProducts = async () => {
        try {
          const data = await listProducts();
          setProducts(data);
        } catch (error) {
          console.error('Error loading products:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadProducts();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.loader}>
          <Text>Loading...</Text>
        </View>
      );
    }
  console.log(products,'products')
    return (
      <CustomFlatList
        data={products}
        // keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
           <ProductCard product={item}  />
          </View>
        )}
      />
    );
  };
  
  const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 16,
      color: '#888',
    },
    productDescription: {
      fontSize: 14,
      color: '#555',
    },
  });



export default ProductList;
