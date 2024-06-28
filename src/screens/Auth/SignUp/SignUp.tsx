// src/screens/Signup.tsx
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  loginSuccess,
  loginFailure,
} from '../../../redux/reducerSlices/authSlice';
import Button from '../../../common/Button';
import {signup} from '../../../services/userServices';

const signupSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

interface SignupFormValues {
  username: string;
  password: string;
  email: string;
}

const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (
    values: SignupFormValues,
    formikHelpers: FormikHelpers<SignupFormValues>,
  ) => {
    const {setSubmitting, setFieldError} = formikHelpers;
    console.log({values});

    try {
      const user = await signup(values.username, values.password, values.email);

      if (user) {
        // Save user data and token in Redux
        // dispatch(loginSuccess({ user, token }));
        console.log({user}, 'signup');
        // Optionally, navigate to another screen
        // navigation.navigate('Login');
      } else {
        dispatch(loginFailure('Signup failed'));
      }
    } catch (error) {
      dispatch(loginFailure('Error occurred during signup'));
      // Set form error using formik's setFieldError
      setFieldError('general', 'Error occurred during signup');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: '', password: '', email: ''}}
        validationSchema={signupSchema}
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
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            {/* {errors.general && (
              <Text style={styles.error}>{errors.general}</Text>
            )} */}
            <Button title="Sign Up" primary onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
      {/* <Text onPress={() => navigation.navigate('Login')}>
        Already have an account? Log in
      </Text> */}
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

export default Signup;
