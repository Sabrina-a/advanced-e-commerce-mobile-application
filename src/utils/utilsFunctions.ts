
import Toast from 'react-native-root-toast';
import {hp} from './dimensions';
import colors from './colors';
import ImagePicker from 'react-native-image-crop-picker';

export function console_log(...args: any[]): void {
  console.log('================================');
  console.log(...args);
}

export const showToastErrorMSG = (msg: string) => {
  msg &&
    Toast.show(msg, {
      position: hp(10),
      duration: 3000,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor: colors?.WarningColor,
    });
};

//////

export const showToastSuccessMessage = (msg: string) => {
  Toast.show(msg, {
    position: hp(10),
    duration: 3000,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: colors?.SucessColor,
  });
};



// ===pick Image ====
export const pickImage = async (props: {multiple?: boolean}) => {
  const multiple = props?.multiple;
  try {
    const image: any = await ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      mediaType: 'photo',
      multiple: multiple,
    });
    if (multiple && image?.length) {
      const uriImag = image?.map((image: any) => ({
        path: image.path,
        uri: image.path,
        name: image?.filename || 'photo.jpg',
        filename: image?.filename || 'photo.jpg',
        type: image?.mime || 'image/jpg',
      }));
      return uriImag;
    } else {
      const uriImag = {
        path: image.path,
        uri: image.path,
        name: image?.filename || 'photo.jpg',
        filename: image?.filename || 'photo.jpg',
        type: image?.mime || 'image/jpg',
      };
      return uriImag;
    }
  } catch (error) {
    console.log(error);
  }
};


