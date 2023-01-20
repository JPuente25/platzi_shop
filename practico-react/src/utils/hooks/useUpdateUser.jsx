import React from 'react';
import { axiosPut } from '../api';

const useUpdateUser = (userData) => {
   const [ updateUser, setUpdateUser ] = React.useState(); //MAIN STATE WILL BE IMPORTED AS DATAA
   const [ loading, setLoading ] = React.useState(true); //LOADER
   React.useEffect( async () => {
      if(userData){
         setLoading(true);
         try {
            const { data, statusText: status } = await axiosPut(`users/${userData.id}`, {
               data: {
                  "email": userData.email,
                  "password": userData.password,
                  "name": userData.name,
                  "avatar": userData.avatar,
               }
            })
            if (status === 'OK') {
               setUpdateUser(data); //MAIN DATA
               setLoading(false); //STOP LOADING
            }
         } catch (error) {
            setUpdateUser(error); //MANAGE ERRORS
            setLoading(false); //STOP LOADING
         }
      }
      setLoading(false);
   }, [userData]);

   return { updateUser, loading };
};

export { useUpdateUser };




