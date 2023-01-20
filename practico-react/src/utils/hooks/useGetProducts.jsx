import React from 'react';
import { axiosGet } from '../api';

const useGetProducts = () => {
   const [products, setProducts] = React.useState(null); //MAIN STATE WILL BE IMPORTED AS DATA
   const [ loading, setLoading ] = React.useState(true); // LOADER

   React.useEffect( async () => { // AXIOS GET REQUESTl GET ALL PRODUCTS
      try {
         const {data, status} = await axiosGet('/products',{
            params: {
               limit: 20, //THIS LIMIT CAN CHANGE
               offset: 1,
            }
         });

         if(status === 200) {
            setProducts(data); //MAIN DATA
            setLoading(false); //STOP LOADING
         }

      } catch (error) {
         setProducts(error); //MANAGE ERRORS
         setLoading(false); //STOP LOADING
      }
   }, []);

   return { products, loading };
};

export { useGetProducts };