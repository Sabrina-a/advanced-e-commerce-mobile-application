import React from 'react';
import {ImageBackground, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {hp, wp} from '../utils/dimensions';
import colors from '../utils/colors';
import AppOverlayLoading from './AppOverlayLoading';
import View from './View';

type Props = {
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
};

const MainView = ({children, style, loading}: Props) => {
  return (
    <>
      <View style={[{flex: 1, backgroundColor: colors.BackgroundColor}, style]}>
        {children}
        {loading && <AppOverlayLoading />}
      </View>
    </>
  );
};

export default MainView;
