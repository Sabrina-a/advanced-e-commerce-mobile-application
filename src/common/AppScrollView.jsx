import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { hp } from '../utils/dimensions';

const AppScrollView = (props) => {
    return (
        <ScrollView {...props} style={[{ paddingTop: hp(10) }, props?.style]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
            <View style={{paddingBottom:hp(11)}}>
                {props?.children}
            </View>
        </ScrollView>
    );
}

export default AppScrollView;