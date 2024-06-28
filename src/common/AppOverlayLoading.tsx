//
import React, {useEffect, useRef} from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../utils/colors';

const AppOverlayLoading = () => {
  return (
    <View
      style={{
        zIndex: 100000,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'transparent',
          borderRadius: 6,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.5,
        }}>
        <ActivityIndicator color={colors.BackgroundColor} size="large" />
      </View>
    </View>
  );
};

export default AppOverlayLoading;
