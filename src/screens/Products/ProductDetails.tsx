import React from 'react';
import {  StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/NavigationTypes';
import Image from '../../common/Image';
import Text from '../../common/Text';
import View from '../../common/View';
import { moderateScale } from '../../utils/ResponsiveDimentions';
import Review from '../../components /Review';
import Button from '../../common/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducerSlices/cartSlice';


type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

interface ProductDetailsProps {
  route: ProductDetailsRouteProp;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { product } = route.params;
const dispatch =useDispatch()
const handleAddToCart = () => {
    dispatch(addToCart(product));
    
   
  };
  return (
    <View style={styles.container}>
      <Image  source={{ uri: product.image }} style={styles.image} />
      <View style={styles?.textContainer}>
      <Text bold  primary  size={22} >{product.productName}</Text>
      <Text primary  >Price : {product.price}</Text>
      <Text bold size={16} regular>{product.description}</Text>
      <View style={{marginTop:8 ,display:"flex" , flexDirection:"row"}}>
        <Text primary size={16} style={{marginRight: 5}}> Rating :</Text>
      <Review rate={product?.rate} />
      </View>
      <View style={{marginTop:moderateScale(8)}}>
        <Text primary size={16} >Product Reviews : </Text>
       <Text bold size={16}>
       {product?.review}
       </Text>
      </View>
      <Button title='Add to cart'  primary onPress={handleAddToCart}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  textContainer:{
    paddingHorizontal:moderateScale(8)
  }
});

export default ProductDetails;
