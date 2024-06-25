import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {console_log, showToastErrorMSG} from '../utils/utilsFunctions';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {paramsValidate} from '../utils/FontsSizes';
import {PostService} from '../services/requests-service';
import { useTranslation } from 'react-i18next';


type postDataFunction = (params: any, body?: any) => Promise<any>;

const usePostData = ({
  onSucsess,

}: {
  onSucsess?: (res: any) => void;
  
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>(null);
  const netInfo = useNetInfo();
const {t}= useTranslation()
  const fetchData = async ({
    postData,
    params,
    body,
    route
  }: {
    postData?: postDataFunction;
    params?: any;
    body?: any;
    route:string;
  }) => {
    // stop the process when no internet

    const paramsValues = params
      ? paramsValidate({
          ...params,
        })
      : {};


    if (!netInfo.isInternetReachable) {
      // todo : show no connection screen
      return;
    }

    try {
      // set loading based on type
      setLoading(true);

      // api call
      const res = route
        ? await PostService({route, params: paramsValues, body})
        : await postData(params, body);

      // for returned response do
      setData(res.data);

      if (onSucsess) {
        onSucsess(res);
      }

      //return the response
    
      return res;
    } catch (error: any) {
      //catch the errors
 
      showToastErrorMSG(t(error?.response?.data?.error));
      setErrors({error: t(error?.response?.data?.error)});

      //return errors
      return {error: error?.response?.data?.error,errorData: error?.response?.data};
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading,
    data: data,
    errors: errors,
    setData: setData,
    postData: fetchData,
  };
};

export default usePostData;
