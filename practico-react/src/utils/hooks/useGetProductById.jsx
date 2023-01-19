import React from 'react';
import { axiosGet } from '../api';

const useGetProductById = (id) => {
   const [product, setProduct] = React.useState(null);
   const [loading, setLoading] = React.useState(true);
   React.useEffect( async () => {
      try {
         const {data, status} = await axiosGet(`/products/${id}`);

         if(status === 200) {
            setProduct(data);
            setLoading(false);
         }

      } catch (error) {
         setProduct(error);
      }
   }, []);

   return { product, loading };
};

export { useGetProductById };