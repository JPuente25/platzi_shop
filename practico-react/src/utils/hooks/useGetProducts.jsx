import React from 'react';
import { axiosGet } from '../api';

const useGetProducts = () => {
   const [products, setProducts] = React.useState(null);
   const [ loading, setLoading ] = React.useState(true);

   React.useEffect( async () => {
      try {
         const {data, status} = await axiosGet('/products',{
            params: {
               limit: 20,
               offset: 1,
            }
         });

         if(status === 200) {
            setProducts(data);
            setLoading(false);
         }

      } catch (error) {
         setProducts(error);
      }
   }, []);

   return { products, loading };
};

export { useGetProducts };