import React from 'react';
import { axiosGet } from '../api';

const useGetAllUsers = () => {
   const [ getAllUsers, setGetAllUsers ] = React.useState(); //MAIN STATE WILL BE EXPORTED AS DATA
   const [ loading, setLoading ] = React.useState(true); //LOADER

   React.useEffect( async () => { //AXIOS GET REQUEST: GETS ALL USER IN DATABASE
      try {
         const { data, statusText: status } = await axiosGet('/users');
         if (status === 'OK') {
            setGetAllUsers(data); //MAIN DATA
            setLoading(false); //STOP LOADING
         }
      } catch (error) {
         setGetAllUsers(error); //MANAGE ERRORS
         setLoading(false); //STOP LOADING
      }
   }, []);

   return { getAllUsers, loading };
};

export { useGetAllUsers };