import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {performLogout} from '../../services/userServices';
import Button from '../../common/Button';
import {moderateScale} from '../../utils/ResponsiveDimentions';
import {hp, wp} from '../../utils/dimensions';

const LoginSecurity = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await performLogout(dispatch);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.logoutButton}
        title="Logout"
        onPress={handleLogout}
        primary
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoutButton: {
    // borderRadius: moderateScale(10),
    height: hp(6),
    width: wp(70),
    marginBottom: moderateScale(23),
    alignSelf: 'center',

  },
});
export default LoginSecurity;
