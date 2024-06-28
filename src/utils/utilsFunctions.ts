import Toast from 'react-native-root-toast';
import {hp} from './dimensions';
import colors from './colors';
import ImagePicker from 'react-native-image-crop-picker';
// import { ACCESS_TOKEN_SECRET } from '@env';

export function console_log(...args: any[]): void {
  console.log('================================');
  console.log(...args);
}

export const showToastErrorMSG = (msg: string) => {
  msg &&
    Toast.show(msg, {
      position: Toast.positions.TOP,
      duration: Toast.durations.LONG,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor: colors?.WarningColor,
    });
};

//////

export const showToastSuccessMessage = (msg: string) => {
  Toast.show(msg, {
    position: Toast.positions.TOP,
    duration: Toast.durations.LONG,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: colors?.SucessColor,
  });
};
 

export const generateMockToken = (
  payloadObject: { exp: number },
  // expiryTimeString?: string,
) => {
  payloadObject.exp = Math.floor(Date.now() / 1000) + 60 * 60;

  const token = `${btoa(JSON.stringify(payloadObject))}.mocksignature`; 
  return token;
};
