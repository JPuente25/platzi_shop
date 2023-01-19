import React from 'react';
import { Context } from '../../context/context';
import { axiosPost } from '../api';

const useAuth = (userData) => {
   const [ render, setRender ] = React.useState(true);
   const [ auth, setAuth ] = React.useState(null);
   const [ loading, setLoading ] = React.useState(true);
   const { state, setUserTokens, addError, removeError } = React.useContext(Context);

   React.useEffect( async () => {
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
               setAuth(data);
               setLoading(false);
               setUserTokens(data);
               localStorage.setItem('sale_user_session', JSON.stringify(data));
     
            }
         } catch (error) {
            setAuth(error);
            setLoading(false);
            console.log(error);
            if (error.response.data.statusCode === 401) {
               addError('002');
            }
         }
      }
   }, [render]);

   return { auth, loading, setRender };
};

export { useAuth };