import React from 'react';
import { axiosPut } from '../api';

const useUpdateUser = (userData) => {
   const [ updateUser, setUpdateUser ] = React.useState();
   const [ loading, setLoading ] = React.useState(true);
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
               setUpdateUser(data);
               setLoading(false);
            }
         } catch (error) {
            setUpdateUser(error);
            setLoading(false);
         }
      }
      setLoading(false);
   }, [userData]);

   return { updateUser, loading };
};

export { useUpdateUser };




