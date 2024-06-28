import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../utils/colors';
import imgs from '../assets/imgs';
import { hp } from '../utils/dimensions';

const CustomTextInput = ({ label, placeholder, affixText, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>

            {/* <View style={{backgroundColor:'red' , zIndex:10000}}> */}
            {/* <View style={{flexDirection:"row" , zIndex:1000}}> */}
            {/* <ImageBackground source={imgs.bodyBgImag} style={[ styles?.labelBg]}> */}
                <Text style={[styles.label, isFocused || props.value ? styles.labelFocused : null]}>
                    {label}
                </Text>
            {/* </ImageBackground> */}
            <></>
            {/* </View> */}
            {/* </View> */}



            <TextInput
                {...props}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={isFocused ? '' : placeholder}
            />
            {affixText && <Text style={styles.affix}>{affixText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        fontSize: 16,
    },
    label: {
        // position: 'absolute',
        // left: 15,
        // top: 12,
        // fontSize: 16,
        // color: '#aaa',
    },
    labelFocused: {
        // top: 6,
        // left: 10,
        // fontSize: 12,
        // color: '#000',
        // // backgroundColor:colors.BackgroundColor ,
        // zIndex:1000,
        // paddingHorizontal:5

    },
    labelBg: {
        backgroundColor: colors.BackgroundColor,
        zIndex: 1000,
        paddingHorizontal: 5,
        left: 10,
        top: 8,
        width:50,
        // height:hp(3)
    },
    affix: {
        position: 'absolute',
        top: 12,
        right: 15,
        fontSize: 16,
        color: '#aaa',
    },
});

export default CustomTextInput;