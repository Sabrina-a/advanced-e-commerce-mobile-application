import { responsiveFontSize } from './ResponsiveDimentions'
import responsiveFont from './responsiveFont'
export default {
    font8: responsiveFont(7),// 8.5
    font10: responsiveFont(9), /// 10
    font12: responsiveFont(10.5), /// 14
    font14: responsiveFont(12), /// 16
    font16: responsiveFont(14), /// 18
    font18: responsiveFont(15.5), /// 20
    font20: responsiveFont(17), /// 22
    font22: responsiveFont(17), /// 22
    font23: responsiveFont(20) ,/// 24.5
    font26: responsiveFont(30) //
}

export const paramsValidate = (params:any)=>{
    if(params){
        for (const [key, value] of Object.entries(params)) {
            if(!value && value!==false){
                delete params[key]
            }
             console.log(`${key}: ${value}`);
           }
    }
     return params
 }