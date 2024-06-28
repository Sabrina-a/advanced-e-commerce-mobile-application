import React from 'react';
import View from './View';
import Text from './Text';
import { moderateScale } from '../utils/ResponsiveDimentions';
import { useTranslation } from 'react-i18next';
import FontsSizes from '../utils/FontsSizes';
import { I18nManager, Pressable, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '../utils/colors';
import TouchableOpacity from './TouchableOpacity';

type Props = {
    title: string;
    subTitle?:string;
    onPress: () => void;
    style:StyleProp<ViewStyle>,
    iconStyle:StyleProp<TextStyle>,
    buttonStyle:StyleProp<ViewStyle>,
    selected?:boolean
}

const ArrowButton = ({selected , title, onPress ,subTitle , style , iconStyle , buttonStyle}: Props) => {
    return (
        <View style={[{ paddingTop: moderateScale(6) , } , style]}>

            <TouchableOpacity onPress={onPress} style={[styles?.container, buttonStyle , ]} >
                <View>
                    <Text style={{lineHeight:17}}>{title}</Text>
                    {subTitle && <Text style={{ lineHeight:14,fontSize:FontsSizes?.font10 , color:colors?.HeadlineColor }}>{subTitle}</Text>}

                </View>
                {/* {!I18nManager.isRTL && <SimpleLineIcons style={iconStyle} name='arrow-right' color={colors?.textBlack} size={FontsSizes?.font20} />} */}
                {/* {I18nManager.isRTL && <SimpleLineIcons  style={iconStyle}  name='arrow-left' color={colors?.textBlack} size={FontsSizes?.font20} />} */}
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: moderateScale(5),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth:1 
    },
    title: {
    }

})


export default ArrowButton;