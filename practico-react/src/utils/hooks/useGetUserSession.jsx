import React from 'react';
import { Context } from '../../context/context';
import { axiosGet } from '../api';

const useGetUserSession = (accessToken) => {
   const [ getUserSession, setGetUserSession ] = React.useState(null);
   const [ loading, setLoading ] = React.useState(true);
   const { setUserData, addError } = React.useContext(Context);
   React.useEffect( async () => {
      if(accessToken) {
         try {
            const { data, status } = await axiosGet('auth/profile', {
               headers: {
                  "Authorization": `Bearer ${accessToken}`,
               }
            })
            if (status >= 200 && status < 300) {
               setGetUserSession(data);
               setUserData(data);
               setLoading(false);
            }
         } catch (error) {
            setGetUserSession(error);
            setLoading(false);
            if (error.response.data.statusCode === 401) {
               addError('001');
            }
         }
      }
   }, [accessToken]);

   return { getUserSession, loading };
};

export { useGetUserSession };