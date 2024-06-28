import * as React from 'react';
import { StyleSheet, } from 'react-native';
import FastImage from 'react-native-fast-image';
// import Entypo from 'react-native-vector-icons/Entypo';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TouchableOpacity from './TouchableOpacity';
// import { Fontisto } from './AppIcon';
import { moderateScale } from '../utils/ResponsiveDimentions';
import FontsSizes from '../utils/FontsSizes';
import colors from '../utils/colors';
import View from './View';
import Text from './Text';
import Error from './Error';
import { Fontisto } from './AppIcon';

type Item = {value:string |number , label:string|number}
type Props = {
  title?:string;
  data:Item[];
  onChange:(value:any)=>void;
  value?:Item[] ;
  error?:string | null |any
}

const CheckBoxGroup = (props:Props) => {

  // const isChecked = true

  return (
    <View style={styles.screen}>
      {props.title && <View row style={{alignItems:"center"}}>
        <Text title> {props.title} </Text>
        <Error style={{paddingHorizontal:moderateScale(3)}} title={props?.error}/>
        </View>}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {props.data.map((item:Item, index:number) => {
          const isChecked = props?.value?.findIndex((value:Item) => item.value === value?.value) !== -1
         
          return (
            <TouchableOpacity onPress={() => {
              props.onChange(item)
            }} key={index} style={styles.checkedBoxContainer}>
              <View style={styles.checkedContainer}>

                <Fontisto  size={FontsSizes.font18} color={colors?.PrimaryColor} name={isChecked ? 'radio-btn-active' : 'radio-btn-passive'} />

              </View>
              <Text> {item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: moderateScale(6),
  },
  checkedIcon: {
    height: moderateScale(18),
    width: moderateScale(9),
    alignSelf: "center"
  },
  checkedContainer: {
    height: moderateScale(11),
    width: moderateScale(11),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  checkedBoxContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: "46%",
    margin: "2%",
  }
});

export default CheckBoxGroup;
