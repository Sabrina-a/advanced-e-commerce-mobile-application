import React from 'react';
import {ActivityIndicator, FlatList, FlatListProps} from 'react-native';
import View from './View';
import {moderateScale} from '../utils/ResponsiveDimentions';
import colors from '../utils/colors';

type Props<T> = FlatListProps<T> & {loadingMoredata?: boolean};

const CustomFlatList = <T extends any>(props: Props<T>) => {
  return (
    <FlatList<T>
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
      ListFooterComponent={() => (
        <>
          {props?.loadingMoredata && (
            <View style={{margin: moderateScale(6), alignItems: 'center'}}>
              <View style={{marginBottom: moderateScale(6)}}>
                {
                  <ActivityIndicator
                    style={{opacity: 0.5}}
                    color={colors?.PrimaryColor}
                    size="small"
                  />
                }
              </View>
            </View>
          )}
        </>
      )}
    />
  );
};

export default CustomFlatList;
