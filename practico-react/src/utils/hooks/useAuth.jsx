import React from 'react';
import { Context } from '../../context/context';
import { axiosPost } from '../api';

const useAuth = (userData) => {
   const [ render, setRender ] = React.useState(true); // EVERY CHANGE ON THIS STATE, WILL ACTIVATE USEEFFECT
   const [ auth, setAuth ] = React.useState(null); //MAIN STATE WILL BE EXPORTED TO GET API INFORMATION
   const [ loading, setLoading ] = React.useState(true); //LOADER
   const { state, 
      setUserTokens, 
      addError, 
      removeError 
   } = React.useContext(Context);// IMPORTS FROM CONTEXT TO MANAGE ERRORS AND INFO

   React.useEffect( async () => { // AXIOS GET REQUEST: USER AUTHENTICATION
      if (userData){
         try {
            const { data, status } = await axiosPost('/auth/login', {
               data: {
                  "email": userData.email,
                  "password": userData.password,
               }
            });
            if (status < 300 && status >= 200) {
               removeError('002');
               setAuth(data); //MAIN DATA
               setLoading(false); //STOP LOADING
               setUserTokens(data);
               localStorage.setItem('sale_user_session', JSON.stringify(data)); //PERSISTING DATA
     
            }
         } catch (error) {
            setAuth(error); //MANAGE ERRORS
            setLoading(false); //STOP LOADING
            if (error.response.data.statusCode === 401) { // NO-AUTHORIZED / WRONG EMAIL OR PASSWORD
               addError('002');
            }
         }
      }
   }, [render]);

   return { auth, loading, setRender };
};

export { useAuth };