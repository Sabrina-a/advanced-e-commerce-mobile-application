import {ImageBackground, Vibration} from 'react-native';

import {hp} from '../../utils/dimensions';
import {moderateScale} from '../../utils/ResponsiveDimentions';

import Text from '../../common/Text';
import FontsSizes from '../../utils/FontsSizes';
import Image from '../../common/Image';
import TouchableOpacity from '../../common/TouchableOpacity';
import colors from '../../utils/colors';
import View from '../../common/View';

const CustomHeader = ({navigation, title, scene, props}) => {
  // console_log(props)
  return (
    <ImageBackground
      resizeMode="stretch"
      style={{
        height: hp(9),
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
      // source={imgs.haederBgImag}
      >
      <View row style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            props?.back && props?.navigation?.goBack();
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          {props?.back && (
            <Image
              style={{tintColor: colors?.white}}
              // source={imgs?.arrowLeft}
            />
          )}
          <Text
            white
            style={{
              fontSize: FontsSizes.font20,
              margin: moderateScale(3),
            }}>
            {props?.options?.title}
          </Text>
        </TouchableOpacity>
        {props?.options?.headerLeft && props?.options?.headerLeft()}
        {props?.options?.headerRight && props?.options?.headerRight()}
      </View>
    </ImageBackground>
  );
};

export default CustomHeader;
