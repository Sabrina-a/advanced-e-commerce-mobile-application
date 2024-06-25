import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showToastErrorMSG} from '../utils/utilsFunctions';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {paramsValidate} from '../utils/FontsSizes';
import {DeleteService} from '../services/requests-service';

type deleteDataFunction = (params: any) => Promise<any>;

const useDeleteData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>(null);

  const netInfo = useNetInfo();

  const fetchData = async ({
    deleteData,
    params,
    route,
  }: {
    deleteData?: deleteDataFunction;
    params?: any;
    route: string;
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
        ? await DeleteService({route, params: paramsValues})
        : await deleteData(paramsValues);
      // for returned response do
      setData(res.data);
      //return the response
      return res;
    } catch (error: any) {
      //catch the errors

      // showToastErrorMSG(error?.response?.data?.error);
      setErrors({error: error?.response?.data?.error});

      //return errors
      return {error: error?.response?.data?.error};
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading,
    data: data,
    errors: errors,
    setData: setData,
    deleteData: fetchData,
  };
};

export default useDeleteData;
