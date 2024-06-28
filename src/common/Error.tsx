import  React from 'react';
import View from './View';
import Text from './Text';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import colors from '../utils/colors';

type Props = {
    title:string;
    props?: TextProps,
    style:StyleProp<TextStyle>
}
const Error = ({props, title , style}:Props) => {
    return (
        <View style={{}}>
            <Text  
            style={[{
                // color:colors.cancelled, 
                textAlign:  "right"   
            } , style]}
            >{title}</Text>
        </View>
    );
}



export default Error;