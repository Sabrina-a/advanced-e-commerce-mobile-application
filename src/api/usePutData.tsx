import  React, { useEffect, useState }  from 'react';
import { StyleSheet, View, Text, I18nManager } from 'react-native';
import axios from "axios"
import { BASE_END_POINT } from "../AppConfig"
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../redux/store';
import { console_log, showToastErrorMSG } from '../utils/utilsFunctions';



export const putData = async({route , token , data ,formData}:{route:string , token:string |null  ,data:any ,  formData?:any})=>{
    const Data = formData ? data : JSON.stringify(data)
   
   

    return axios.put(`${BASE_END_POINT}${route}`, Data , {
        headers: {
            'Content-Type': formData? 'multipart/form-data': 'application/json',
            "Authorization": `Bearer ${token}`,
            "x-app-token": " Sona3-Team",
            "accept-language":I18nManager.isRTL ? 'ar' : 'en',
        },
    })
}



const usePutData = () => {
    const [loading , setLoading] = useState(false)
    const [resData , setresData] = useState(null)
    const [errors , setErrors] = useState<null | boolean | any>(null)
    const token:any = useSelector<RootState>(state=>state?.auth?.currentUser?.token)

    const putdata = async({route , data , formData}:{route:string   ,data:any ,  formData?:any})=>{
        try {
            setLoading(true)
            const res:any = await putData({route , token , data , formData})
          
            // if(res?.status !== 400   && res?.status !== 500 ){
                setresData(res.data)
                setLoading(false)
                return res.data
            // }else{
            //     setErrors(res?.response?.data?.error)
                
            // }
        } catch (error:any) {
         
            setErrors(error.response.data.error)
            setLoading(false)
            setLoading(false)
            const status = error?.response?.status
            if (status === 401 || status === 403) {
                setErrors({ error: error?.response?.data?.error })
                showToastErrorMSG(error?.response?.data?.error)
            } else {
                showToastErrorMSG(error?.response?.data?.error)
                setErrors({ error: error?.response?.data?.error })
            }
            return { error: error.response.data.error }


        } 

        setLoading(false)
    }




    return (
        {
            loading : loading,
            res:resData, 
            errors:errors,
            putData:putdata
        }
    );
}


export default usePutData;