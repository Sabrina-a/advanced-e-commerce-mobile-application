import React from 'react';
import { StyleSheet , View as MainView, ViewProps } from 'react-native';
import colors from '../utils/colors';
import { moderateScale } from '../utils/ResponsiveDimentions';

const View = (props:ViewProps&{bgPrimary?:any,center?:any ,  flex?:boolean , row?:boolean}) => {
    const { bgPrimary, center , style  , flex  ,row} = props
    return (
        <MainView {...props}
            style={[
                center&&styles?.center,
                row&&{flexDirection:"row"},
                style,
            ] }
        >{props?.children}</MainView>
    );
}

const styles = StyleSheet?.create({
    bgPrimary: {
       flex:1, 
       backgroundColor:colors?.BackgroundColor
    },
    center: {
        justifyContent:"center",
        alignItems:"center"
    }
})

export default View;