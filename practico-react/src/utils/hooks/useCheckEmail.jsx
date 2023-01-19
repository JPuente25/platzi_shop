import React from 'react';
import { axiosPost } from '../api';

const useCheckEmail = (userData) => {
   const [ checkEmail, setCheckEmail ] = React.useState();
   const [ loading, setLoading ] = React.useState(true);

   React.useEffect( async () => {
      if (userData) {
         try {
            const { data, status } = await axiosPost('users/is-available', {
               data: {
                  "email": userData.email,
               }
            })
            if(status === 201){
               setCheckEmail(data);
            }
         } catch (error) {
            setCheckEmail(error);
         }
      }
   }, [userData]);

   return { checkEmail };
};

export { useCheckEmail };