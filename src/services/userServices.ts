import axios from 'axios';
import {generateMockToken, showToastErrorMSG} from '../utils/utilsFunctions';
import * as Keychain from 'react-native-keychain';
import {AppDispatch} from '../redux/store';
import {logout} from '../redux/reducerSlices/authSlice';
const API_URL = 'http://localhost:3001';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: {username, password},
    });
console.log(response,'bef')
    if (response.data.length > 0) {
      console.log(response.data)
      const user = response.data[0];
      const token = generateMockToken(user);
      // Store the token securely
      await Keychain.setGenericPassword('token', token);
      return {user, token};
    } else {
      showToastErrorMSG('Invalid username or password');
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  username: string,
  password: string,
  email: string,
) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      username,
      password,
      email,
    });

    if (response.data) {
      const user = response.data;
      return user;
    } else {
      showToastErrorMSG('SignUp Failed');
      throw new Error('Signup failed');
    }
  } catch (error) {
    throw error;
  }
};

export const performLogout = async (dispatch: AppDispatch) => {
  try {
    await Keychain.resetGenericPassword();
    dispatch(logout());
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
