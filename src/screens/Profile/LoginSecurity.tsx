import  React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { performLogout } from '../../services/userServices';
import Button from '../../common/Button';

const LoginSecurity = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
      await performLogout(dispatch);
    };
  
    return (
        <View style={styles.container}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      );
    };


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
  });
export default LoginSecurity;