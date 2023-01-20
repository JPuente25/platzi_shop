import React from 'react';
import { Context } from '../../context/context';
import { axiosGet } from '../api';

const useGetUserSession = (accessToken) => {
   const [ getUserSession, setGetUserSession ] = React.useState(null); //MAIN STATE WILL BE IMPORTED AS DATA
   const [ loading, setLoading ] = React.useState(true); //LOADER
   const { setUserData, addError } = React.useContext(Context); //GLOBAL STATE FOR USERDATA AND ERROR MSG ON FIRST SESSION

   React.useEffect( async () => { //AXIOS GET REQUEST: VERIFY ACCESS TOKEN TO CHECK IF IT IS OKAY
      if(accessToken) {
         try {
            const { data, status } = await axiosGet('auth/profile', {
               headers: {
                  "Authorization": `Bearer ${accessToken}`,
               }
            })
            if (status >= 200 && status < 300) {
               setGetUserSession(data); //MAIN DATA
               setUserData(data); //SAVA USERDATA / LET PERSISTED DATA LOG IN ACCOUNT
               setLoading(false); //STOP LOADING
            }
         } catch (error) {
            setGetUserSession(error); //MANAGE ERRORS
            setLoading(false); //STOP LOADING
            if (error.response.data.statusCode === 401) {
               addError('001'); //ADD AN ERROR MSG ON LOGIN PAGE
            }
         }
      }
   }, [accessToken]);

   return { getUserSession, loading };
};

export { useGetUserSession };