import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux/store';
 
import View from '../../common/View';
import Button from '../../common/Button';
import Text from '../../common/Text';
import Input from '../../common/Input';
import { processPayment } from '../../redux/reducerSlices/paymentSlice';
const Payment: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const dispatch = useDispatch();
  const {loading, success, error} = useSelector(
    (state: RootState) => state?.payment,
  );

  const handlePayment = async() => {
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
    };

   await dispatch(processPayment(paymentData));
  };

  return (
    <View style={styles.container}>
      <Text>Payment Details</Text>
      <Input
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        //style={styles.input}
        handleChange={setCardNumber}
        title={'Card Number'}
      />
      <Input
        placeholder="Expiry Date"
        value={expiryDate}
        handleChange={setExpiryDate}
        title="Expiry Date"
      />
      <Input
        placeholder="CVV"
        value={cvv}
        handleChange={setCvv}
        keyboardType="numeric"
        secureTextEntry
        title={'CVV'}
      />
      <Button primary title="Pay Now" onPress={handlePayment} />
      {loading && <Text>Processing Payment...</Text>}
      {success && <Text>Payment Successful!</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Payment;
