import React from 'react';
import { axiosGet } from '../api';

const useGetAllUsers = () => {
   const [ getAllUsers, setGetAllUsers ] = React.useState();
   const [ loading, setLoading ] = React.useState(true);
   React.useEffect( async () => {
      try {
         const { data, statusText: status } = await axiosGet('/users');
         if (status === 'OK') {
            console.log('entrando')
            setGetAllUsers(data);
            setLoading(false);
         }
      } catch (error) {
         setGetAllUsers(error);
      }
   }, []);

   return { getAllUsers, loading };
};

export { useGetAllUsers };