import React from 'react';
import { axiosPost } from '../api';

const useCheckEmail = (userData) => {
   const [ checkEmail, setCheckEmail ] = React.useState();//MAIN STATE WILL BE IMPORTED TO GET API INFORMATION
   const [ loading, setLoading ] = React.useState(true);//LOADER

   React.useEffect( async () => {// AXIOS POST REQUEST: CHECK USER EMAIL NOT REGISTERED
      if (userData) {
         try {
            const { data, status } = await axiosPost('users/is-available', {
               data: {
                  "email": userData.email,
               }
            })
            if(status === 201){
               setCheckEmail(data); //MAIN DATA
               setLoading(false); //STOP LOADING
            }
         } catch (error) {
            setCheckEmail(error); //MANAGE ERRORS
            setLoading(false); //STOP LOADING
         }
      }
   }, [userData]);

   return { checkEmail };
};

export { useCheckEmail };