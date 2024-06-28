import React from 'react';
import { TouchableOpacity as MainTouchableOpacity, TouchableOpacityProps } from 'react-native';

const TouchableOpacity = (props: TouchableOpacityProps) => {
    return (
        <MainTouchableOpacity {...props} >
            {props?.children}
        </MainTouchableOpacity>
    );
}

export default TouchableOpacity;