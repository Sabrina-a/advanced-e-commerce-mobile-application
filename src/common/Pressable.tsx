import React from 'react';
import { StyleSheet , Pressable as ManinPressable,  PressableProps, } from 'react-native';
import colors from '../utils/colors';



const Pressable = (props:PressableProps) => {
    return (
        <ManinPressable   {...props}
           
        >{props?.children}</ManinPressable>
    );
}

const styles = StyleSheet?.create({

})

export default Pressable;