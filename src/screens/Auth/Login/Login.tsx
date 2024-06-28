// src/screens/Login.tsx
import React from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {
  loginSuccess,
  loginFailure,
} from '../../../redux/reducerSlices/authSlice';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../../types/NavigationTypes';
import Button from '../../../common/Button';
import {login} from '../../../services/userServices';
import {generateMockToken, showToastErrorMSG} from '../../../utils/utilsFunctions';
import Toast from 'react-native-root-toast';

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});
interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<NavigationType>();
  const dispatch = useDispatch();

  const showToast = () => {
    
  };

  const onSubmit = async (
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>,
  ) => {
    const {setSubmitting, setFieldError} = formikHelpers;
    try {
      const {user, token} = await login(values.username, values.password);

      if (user) {
        // Save user data and token in Redux
        dispatch(loginSuccess({user, token}));
        navigation.navigate('Home');
      } else {
         showToastErrorMSG("Invalid credentials")
        dispatch(loginFailure('Invalid username or password'));
      }
    } catch (error) {
      dispatch(loginFailure('Error occurred during login'));
      setFieldError('general', 'Error occurred during login');
    } finally {
      setSubmitting(false);
    }
  };
  showToast()
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values?.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors?.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values?.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors?.password}</Text>
            )}
            <Button title="Login" primary onPress={()=>handleSubmit()} />
          </View>
        )}
      </Formik>
      <Text onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});

export default Login;
