import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {console_log, showToastErrorMSG} from '../utils/utilsFunctions';
import {useNetInfo} from '@react-native-community/netinfo';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {paramsValidate} from '../utils/FontsSizes';
import GetService from '../services/requests-service';

type GetDataFunction = (params?: {}) => Promise<any>;
type UseGetDataProps = {
  route: string;
  notLoadData?: boolean;
  onSuccess?: (res: any, setData: any) => void;
  getData?: GetDataFunction;
  params?: {};
};

const useGetData = ({
  route,
  onSuccess,
  getData,
  params,
  notLoadData,
}: UseGetDataProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{result: any}>();
  const [errors, setErrors] = useState<any>(null);
  const [loadingMoreData, setLoadingMoreData] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);
  const netInfo = useNetInfo();

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10, ///should be 10
    pageNo: 1,
  });

  const fetchData = async ({
    getData,
    params,
    type,
    selfRoute = route,
  }: {
    getData?: GetDataFunction;
    params?: any;
    type?: 'refresh';
    selfRoute?: string;
  }) => {
    // stop the process when no internet
    //   if (!netInfo.isInternetReachable) {
    //     console_log(netInfo.isInternetReachable, "netInfo.isInternetReachable")
    //     return;
    // }

    //handle if params have a key of undefined value then remove iit from the object params
    const paramsValues = params
      ? paramsValidate({
          page: pagination?.page,
          limit: pagination?.limit,
          ...params,
        })
      : {page: pagination?.page, limit: pagination?.limit};

    if (params?.page) {
      setPagination(prev => ({...prev, page: params?.page}));
    }

    try {
      // set loading based on type
      type === 'refresh' ? setRefreshLoading(true) : setLoading(true);
      // api call

      console_log(paramsValues, {route}, 'paramsValues use get Data');
      const res = route
        ? await GetService({route: selfRoute, params: paramsValues})
        : getData && (await getData(paramsValues));
      // const res =await getData(paramsValues);

      if (res?.data?.count > 0) {
        const pageNo = Math.ceil(res?.data?.count / pagination?.limit);
        if (params?.page) {
          setPagination((prev: any) => ({...prev, pageNo, page: params?.page}));
        } else {
          setPagination((prev: any) => ({...prev, pageNo}));
        }
      }

      // for returned response do

      setData(res.data);
      if (onSuccess) {
        onSuccess(res, setData);
      }
      console_log({res});
      //return the response
      return res;
    } catch (error: any) {
      //catch the errors

      // showToastErrorMSG(error?.response?.data?.error);
      // setErrors({ error: error?.response?.data?.error });

      //return errors
      return {error: error?.response?.data?.error};
    } finally {
      type === 'refresh' ? setRefreshLoading(false) : setLoading(false);
    }
  };

  useEffect(() => {
    if (netInfo?.isInternetReachable && !notLoadData) {
      getData &&
        fetchData({
          getData,
          params: {
            ...params,
            page: pagination?.page,
            limit: pagination?.limit,
          },
        });

      route &&
        fetchData({
          // getData,
          params: {
            ...params,
            page: pagination?.page,
            limit: pagination?.limit,
          },
        });
    }
  }, [netInfo.isInternetReachable]);

  //=====================
  //loading more Data
  //====================
  const loadMoreData = async () => {
    console_log('loadMoreData');
    if (loadingMoreData || loading) {
      return;
    }
    if (
      route &&
      pagination?.pageNo > 1 &&
      pagination?.page <= pagination?.pageNo
    ) {
      setLoadingMoreData(true);
      try {
        const filterParams = !params
          ? {page: pagination?.page + 1, limit: pagination?.limit}
          : {...params, page: pagination?.page + 1, limit: pagination?.limit};

        const validateParams = paramsValidate(filterParams);

        // const apiParams = new URLSearchParams(validateParams);
        const res = await GetService({
          route,
          params: {...params, ...validateParams},
        }); //fetchData({ getData, params: { ...params, ...validateParams }, })
        // const res = await fetchData({ route: `${route}?${apiParams.toString()}`, token })
        setPagination((prev: any) => ({...prev, page: prev?.page + 1}));

        if (res?.data?.result && data?.result) {
          setData((prev: any) => ({
            ...prev,
            result: [...data?.result, ...res?.data.result],
          }));
        }
        // console_log({ res }, "loadMoreData")
      } catch (error) {
        console_log({error});
      }
      setLoadingMoreData(false);
    }
    /////will be deleted
    if (
      getData &&
      pagination?.pageNo > 1 &&
      pagination?.page <= pagination?.pageNo
    ) {
      setLoadingMoreData(true);
      try {
        const filterParams = !params
          ? {page: pagination?.page + 1, limit: pagination?.limit}
          : {...params, page: pagination?.page + 1, limit: pagination?.limit};

        const validateParams = paramsValidate(filterParams);

        // const apiParams = new URLSearchParams(validateParams);
        const res = await getData({...params, ...validateParams}); //fetchData({ getData, params: { ...params, ...validateParams }, })
        // const res = await fetchData({ route: `${route}?${apiParams.toString()}`, token })
        setPagination((prev: any) => ({...prev, page: prev?.page + 1}));

        setData((prev: any) => ({
          ...prev,
          result: [...data?.result, ...res?.data.result],
        }));
        // console_log({ res }, "loadMoreData")
      } catch (error) {
        console_log({error});
      }
      setLoadingMoreData(false);
    }
  };

  //=====================
  //Reloade data
  //====================
  const onRefresh = async () => {
    if (route) {
      const defaultPagination = {
        ...pagination,
        page: 1,
      };
      setPagination(defaultPagination);

      const filterParams = !params
        ? defaultPagination
        : {...defaultPagination, ...params};
      const res = await fetchData({
        type: 'refresh',
        params: {...params, ...filterParams},
      });
    }

    ///
    if (getData) {
      const defaultPagenation = {
        ...pagination,
        page: 1,
      };
      setPagination(defaultPagenation);

      const filterParams = !params
        ? defaultPagenation
        : {...defaultPagenation, ...params};
      const res = await fetchData({
        type: 'refresh',
        getData,
        params: {...params, ...filterParams},
      });
    }
    // fetchData({ route, type: "Refrech", params: isPgenation ? filterParams : params })
  };

  return {
    loading: loading,
    data: data,
    errors: errors,
    setData: setData,
    getData: fetchData,
    loadMoreData: loadMoreData,
    loadingMoreData: loadingMoreData,
    onRefresh: onRefresh,
    refreshLoading: refreshLoading,
    // onRefreshLoading: refreshLoading,
  };
};

export default useGetData;
