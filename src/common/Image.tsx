import  React from 'react';
import { Image as MainImage, ImageProps,} from 'react-native'

const Image = (props:ImageProps) => {
    return (
        <MainImage {...props} />
    );
}

export default Image;